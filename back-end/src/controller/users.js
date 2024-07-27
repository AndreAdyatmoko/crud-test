const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const data = await UsersModel.getAllUsers();
    res.status(200).json({
      message: "Fetched all users",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching users",
      error: error.message
    });
  }
};

const createNewUsers = async (req, res) => {
  try {
    await UsersModel.createNewUsers(req, res);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating a new user",
      error: error.message
    });
  }
};

const updateUsers = async (req, res) => {
  try {
    await UsersModel.updateUsers(req, res);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the user",
      error: error.message
    });
  }
};

const deleteUsers = async (req, res) => {
  try {
    await UsersModel.deleteUsers(req, res);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the user",
      error: error.message
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
};
