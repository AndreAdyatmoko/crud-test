const router = require("express").Router();
const authController = require("../controller/authController/auth");


router.post("/register", authController.register);


module.exports = router