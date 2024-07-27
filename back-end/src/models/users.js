const dbPool = require("../config/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getAllUsers = async () => {
  const SQLQuery = "SELECT * FROM users";

  try {
    const [data] = await dbPool.execute(SQLQuery);
    return data;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};

const createNewUsers = async (req, res) => {
  console.log("Request body:", req.body); // Log untuk debug
  const { full_name, email, password, date_of_birth, gender } = req.body;

  if (!full_name || !email || !password || !date_of_birth || !gender) {
    return res.status(400).json({
      error: "All fields are required.",
    });
  }

  try {
    const [existingUsers] = await dbPool.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (existingUsers.length > 0) {
      return res.status(400).json({
        error: "Email already exists.",
      });
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error: "Password harus terdiri dari huruf dan karakter alfanumerik.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const SQLQuery =
      "INSERT INTO users (full_name, email, password, date_of_birth, gender) VALUES (?, ?, ?, ?, ?)";
    const [result] = await dbPool.execute(SQLQuery, [
      full_name,
      email,
      hashedPassword,
      date_of_birth,
      gender,
    ]);

    res.status(201).json({
      message: "Create new user",
      data: {
        id: result.insertId,
        full_name,
        email,
        date_of_birth,
        gender,
      },
    });
  } catch (error) {
    console.error("Error creating new user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating a new user." });
  }
};

const updateUsers = async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;

  // Validasi apakah ID pengguna diberikan
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  // Pastikan setidaknya satu field untuk update diberikan
  if (Object.keys(updates).length === 0) {
    return res
      .status(400)
      .json({ error: "At least one field is required for update" });
  }

  // Buat query dan values untuk pembaruan
  const fieldsToUpdate = [];
  const valuesToUpdate = [];

  if (updates.full_name) {
    fieldsToUpdate.push("full_name = ?");
    valuesToUpdate.push(updates.full_name);
  }
  if (updates.email) {
    fieldsToUpdate.push("email = ?");
    valuesToUpdate.push(updates.email);
  }
  if (updates.password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(updates.password)) {
      return res.status(400).json({
        error: "Password harus terdiri dari huruf dan karakter alfanumerik.",
      });
    }
    const hashedPassword = await bcrypt.hash(updates.password, saltRounds);
    fieldsToUpdate.push("password = ?");
    valuesToUpdate.push(hashedPassword);
  }
  if (updates.date_of_birth) {
    fieldsToUpdate.push("date_of_birth = ?");
    valuesToUpdate.push(updates.date_of_birth);
  }
  if (updates.gender) {
    fieldsToUpdate.push("gender = ?");
    valuesToUpdate.push(updates.gender);
  }

  // Tambahkan ID pengguna ke valuesToUpdate
  valuesToUpdate.push(userId);

  // Buat query pembaruan
  const SQLQuery = `UPDATE users SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;

  try {
    const [result] = await dbPool.execute(SQLQuery, valuesToUpdate);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the user." });
  }
};

const deleteUsers = async (req, res) => {
  const userId = req.params.id;
  try {
    const SQLQuery = "UPDATE users SET status = 'inactive' WHERE id = ?";
    const [result] = await dbPool.execute(SQLQuery, [userId]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
      data: {
        id: userId,
      }
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user." });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
};
