const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware")
const Auth = require("../controller/auth");

// Jalannya route nanti

router.post("/login", Auth.Login);

// Change Password

router.patch("/change-password", authenticateToken, Auth.ChangePassword);

// Logout

router.post("/logout", authenticateToken, Auth.Logout);

// Check Activity

router.get("/check-activity", authenticateToken, Auth.CheckActivity);


module.exports = router;
