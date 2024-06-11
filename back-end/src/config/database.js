const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const mysql = require("mysql2/promise");

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_DATABASE;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;

const pool = mysql.createPool({
    host: HOST,
    user: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    port: PORT,
    
});

const getConnection = async () => {
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        throw error;
    }
};

const query = async (sql, values) => {
    const connection = await getConnection();
    try {
        const [rows] = await connection.query(sql, values);
        return rows;
        
    } catch (error) {
        throw error;
    }finally{
        connection.release();
    }
}

module.exports = {getConnection, query};
