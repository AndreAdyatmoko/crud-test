const express = require("express");
const app = express();
const db = require("./config/database");
require("dotenv").config();

// Body parser
app.use(express.json());


// Import routes
const auth = require("./routes/authRouter");


// set router here
app.use("/api/auth", auth);


// Endpoints untuk mengjuji koneksi ke databse

app.get("/", (req, res) => {
  res.send("Connected to database");
});

// endpoints
app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
