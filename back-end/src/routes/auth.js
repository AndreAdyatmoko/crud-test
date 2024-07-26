const express = require("express");
const router = express.Router();

// Contoh route POST untuk login
router.post("/login", (req, res) => {
  res.send("User login");
});

module.exports = router;
