const express = require("express");

const UserController = require("../controller/users");

const router = express.Router();

// Ini jalannya user nanti

// Create
router.post("/", UserController.createNewUsers);

// Get
router.get("/", UserController.getAllUsers);

// Update
router.patch("/:id", UserController.updateUsers);


module.exports = router;
