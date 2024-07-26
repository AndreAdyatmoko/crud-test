const getAllUsers = (req, res) => {
  const data = {
    id: 1,
    name: "Viktor",
    email: "lq8h7@example.com",
    birthDate: "1990-01-01",
    gender: "Male",
    registrationDate: "2022-01-01",
    status: "Active",
  };
  res.json({
    message: "Get all users",
    data: data,
  });
};

const createNewUsers = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Create new users",
    data: req.body,
  });
};

const updateUsers =(req, res) => {
console.log(req.params);
res.json({
  message: "Update users",})
}

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers
};
