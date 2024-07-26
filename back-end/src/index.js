const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// Set Middleware
app.use(cors());
app.use(express.json());

// Logging Middleware

const middlewareLogRequest = require("./middleware/log");

// Database connection


// Import Routes
const usersRoutes = require("./routes/users");
app.use(middlewareLogRequest);



// User Routes

app.use("/api/users", usersRoutes);


app.listen(4000, () => {
  console.log("Server running on port 4000");
});
