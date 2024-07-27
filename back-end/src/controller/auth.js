const AuthModel = require ('../models/auth')

const Login = async ( req, res) => {
try {
    await AuthModel.login(req, res)
} catch (error) {
    res.status(500).json({
        message: "An error occurred while login",
        error: error.message
    })
}
}


module.exports = {
    Login
}