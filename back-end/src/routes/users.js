const express = require("express");

const UserController = require("../controller/users");

const router = express.Router();

// Ini jalannya user nanti

// Get
router.get("/", UserController.getAllUsers);

// Create
router.post("/", UserController.createNewUsers);

// Update
router.patch("/:id", UserController.updateUsers);

// Delete
router.delete("/:id", UserController.deleteUsers);

module.exports = router;
