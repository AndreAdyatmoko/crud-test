const express = require("express");
const app = express();
const db = require("./config/database");

// Configure express
require("dotenv").config();


// Connect to database
// db.sequelize.sync({alter: true});

// Body parser
app.use(express.json());


// Import routes



// endpoints
app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
