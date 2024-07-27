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

const ChangePassword = async (req, res) => {
    try {
        await AuthModel.changePassword(req, res)
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while changing password",
            error: error.message
        })
    }
}

const Logout = async (req, res) => {
    try {
        await AuthModel.logout(req, res)
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while logging out",
            error: error.message
        })
    }
}

const CheckActivity = async (req, res) => {
    try {
        await AuthModel.getUserActivities(req, res)
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while checking activity",
            error: error.message
        })
    }
}



module.exports = {
    Login,
    ChangePassword,
    Logout,
    CheckActivity

}