const express = require("express");
const usersRoutes = require('./routes/users')
const app = express();

app.use('/users', usersRoutes)

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
