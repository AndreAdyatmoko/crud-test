const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// Set Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Import Routes
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");




// User Routes

app.use("/api/users", usersRoutes);

// Auth Routes

app.use("/api/auth", authRoutes);


app.listen(4000, () => {
  console.log("Server running on port 4000");
});
