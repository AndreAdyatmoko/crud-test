const dbPool = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email dan password harus diisi",
      });
    }

    // Periksa apakah email terdaftar
    const [checkEmail] = await dbPool.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (checkEmail.length === 0) {
      return res.status(400).json({
        message: "Email tidak terdaftar",
      });
    }

    // Periksa apakah akun aktif
    const [checkActiveUser] = await dbPool.execute(
      "SELECT * FROM users WHERE email = ? AND status = 'Active'",
      [email]
    );

    if (checkActiveUser.length === 0) {
      return res.status(400).json({
        message: "Akun anda sedang tidak aktif",
      });
    }

    // Periksa password
    const passwordMatch = await bcrypt.compare(
      password,
      checkEmail[0].password
    );

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Password yang anda masukkan salah",
      });
    }

    // Buat JWT token
    const token = jwt.sign(
      {
        id: checkEmail[0].id,
        email: checkEmail[0].email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Update last_login timestamp
    await dbPool.execute(
      "UPDATE users SET last_login = NOW() WHERE email = ?",
      [email]
    );

    // Log login activity
    await dbPool.execute(
      "INSERT INTO user_activities (user_id, activity_type, activity_time) VALUES (?, 'Login', NOW())",
      [checkEmail[0].id]
    );

    res.status(200).json({
      message: "Login success",
      token,
      full_name: checkEmail[0].full_name, // Menyertakan full_name dalam respons
      last_login: checkEmail[0].last_login, // Menyertakan last_login dalam respons
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id; // Mengambil userId dari token

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        message: "Old password and new password must be provided.",
      });
    }

    // Verify the user exists
    const [checkUser] = await dbPool.execute(
      "SELECT * FROM users WHERE id = ?",
      [userId]
    );

    if (checkUser.length === 0) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Verify the old password
    const passwordMatch = await bcrypt.compare(
      oldPassword,
      checkUser[0].password
    );

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Old password is incorrect",
      });
    }

    // Validate new password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({
        message:
          "New password must be at least 8 characters long and include both letters and numbers.",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the password in the database
    await dbPool.execute("UPDATE users SET password = ? WHERE id = ?", [
      hashedPassword,
      userId,
    ]);

    // Log the password change activity
    await dbPool.execute(
      "INSERT INTO user_activities (user_id, activity_type, activity_time) VALUES (?, 'Change Password', NOW())",
      [userId]
    );

    res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const userId = req.user.id; // Mengambil userId dari token

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required.",
      });
    }

    // Log logout activity
    await dbPool.execute(
      "INSERT INTO user_activities (user_id, activity_type, activity_time) VALUES (?, 'Logout', NOW())",
      [userId]
    );

    res.status(200).json({
      message: "Logout success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getUserActivities = async (req, res) => {
  const userId = req.params.userId;
  const authUserId = req.user.id; // Mengambil userId dari token

  try {
    // Pastikan pengguna hanya dapat melihat aktivitas mereka sendiri
    if (userId != authUserId) {
      return res.status(403).json({
        message: "You do not have permission to view this user's activities.",
      });
    }

    const [activities] = await dbPool.execute(
      "SELECT * FROM user_activities WHERE user_id = ? ORDER BY activity_time DESC",
      [userId]
    );

    if (activities.length === 0) {
      return res.status(404).json({
        message: "No activities found for this user.",
      });
    }

    res.status(200).json({
      message: "Activities retrieved successfully",
      data: activities,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  changePassword,
  logout,
  getUserActivities,
};
