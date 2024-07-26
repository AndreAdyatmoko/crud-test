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

const updateUsers = (req, res) => {
  const{id} = req.params
    console.log("Id:", id);
  res.json({
    message: "Update users",
    data: req.body,
  });
};

const deleteUsers = (req, res) => {
    const{id} = req.params
    console.log("Id:", id);
  res.json({
    message: "Delete users",
    data: {
        id: id,
        name: "Viktor",
        email: "lq8h7@example.com",
        birthDate: "1990-01-01",
        gender: "Male",
        registrationDate: "2022-01-01",
        status: "Active",
        
    }
  });
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
};
