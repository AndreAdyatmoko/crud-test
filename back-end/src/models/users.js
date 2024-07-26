const dbPool = require("../config/database");

const getAllUsers = async () => {
  const SQLQuery = "SELECT * FROM users";

  try {
    const data = await dbPool.execute(SQLQuery);
    return data;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};

module.exports = {
  getAllUsers,
};