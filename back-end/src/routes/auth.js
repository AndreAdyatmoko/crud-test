const express = require("express");
const router = express.Router();
const Auth = require("../controller/auth");

// Jalannya route nanti

router.post("/login", Auth.Login);


module.exports = router;
