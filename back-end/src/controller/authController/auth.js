const db = require("../../config/database")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    try {
        const { email, password } = req.body

        // Check if email and password are provided
        if (!email || !password){
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        // Check if email already exists
        const {existsUser} = await db.query("SELECT * FROM users Where email = ?", [email])
        if (existsUser.length > 0) {
            return res.status(400).json({
                message: "Email already exists"
            })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // insert user into database
        const insertUser = "Insert into users (email, password) values (?,?)"
        const result = await db.query(insertUser, [email, hashedPassword])

        return res.status(200).json({
            message: "User created successfully",
            data: result
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Ini error karena " + error,
        })
        
    }
}

module.exports = {register}