const dbPool = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email dan password harus diisi"
      });
    }

    // Periksa apakah email terdaftar
    const [checkEmail] = await dbPool.execute("SELECT * FROM users WHERE email = ?", [email]);

    if (checkEmail.length === 0) {
      return res.status(400).json({
        message: "Email tidak terdaftar"
      });
    }

    // Periksa apakah akun aktif
    const [checkActiveUser] = await dbPool.execute("SELECT * FROM users WHERE email = ? AND status = 'Active'", [email]);

    if (checkActiveUser.length === 0) {
      return res.status(400).json({
        message: "Akun anda sedang tidak aktif"
      });
    }

    // Periksa password
    const passwordMatch = await bcrypt.compare(password, checkEmail[0].password);

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Password yang anda masukkan salah"
      });
    }

    // Buat JWT token
    const token = jwt.sign({
      id: checkEmail[0].id,
      email: checkEmail[0].email
    }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    // Update last_login timestamp
    const [result] = await dbPool.execute("UPDATE users SET last_login = NOW() WHERE email = ?", [email]);

    res.status(200).json({
      message: "Login success",
      token,
      last_login: checkEmail[0].last_login // Menyertakan last_login dalam respons
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login
};
