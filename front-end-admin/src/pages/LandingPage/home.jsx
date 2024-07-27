import React, { useState, useEffect } from "react";
import ButtonPrimary from "../../component/button/button";
import ConfirmationModal from "../../component/modals/confirmationModal";

const Home = () => {
  const initialUsers = [
    {
      name: "John Doe",
      email: "john@example.com",
      birthDate: "1990-01-01",
      gender: "Male",
      registrationDate: "2022-01-01",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      birthDate: "1992-02-02",
      gender: "Female",
      registrationDate: "2022-02-02",
      status: "Inactive",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editUser, setEditUser] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
    status: "All",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    // Ambil nama admin dari local storage
    const storedAdminName = localStorage.getItem("username");
    setAdminName(storedAdminName || "Admin");
  }, []);

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleSave = () => {
    setUsers(users.map((u) => (u.email === editUser.email ? editUser : u)));
    setEditUser(null);
  };

  const handleDelete = (email) => {
    setUserToDelete(email);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setUsers(
      users.map((user) =>
        user.email === userToDelete ? { ...user, status: "Inactive" } : user
      )
    );
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleLogout = () => {
    // Hapus token dan username dari local storage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    // Lakukan logika logout lainnya (misal, redirect ke halaman login)
    window.location.href = "/login";
  };

  const filteredUsers = users.filter((user) => {
    const { name, email, startDate, endDate, status } = filters;
    const userDate = new Date(user.registrationDate);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    return (
      (name ? user.name.toLowerCase().includes(name.toLowerCase()) : true) &&
      (email ? user.email.toLowerCase().includes(email.toLowerCase()) : true) &&
      (status !== "All" ? user.status === status : true) &&
      (start ? userDate >= start : true) &&
      (end ? userDate <= end : true)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Selamat datang {adminName}</h1>
          <ButtonPrimary
            text="Logout"
            className="bg-red-500 hover:bg-red-700 w-16 p-2 font-bold"
            onClick={handleLogout}
          />
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Filters</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border p-2 rounded"
              value={filters.name}
              onChange={handleFilterChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded"
              value={filters.email}
              onChange={handleFilterChange}
            />
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              className="border p-2 rounded"
              value={filters.startDate}
              onChange={handleFilterChange}
            />
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              className="border p-2 rounded"
              value={filters.endDate}
              onChange={handleFilterChange}
            />
            <select
              name="status"
              className="border p-2 rounded"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md">
            <thead>
              <tr>
                <th className="p-2 border-b ">No</th>
                <th className="py-2 px-4 border-b ">Nama</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Tanggal Lahir</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Registrasi</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.email}>
                  <td className="p-2 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.birthDate}</td>
                  <td className="py-2 px-4 border-b">{user.gender}</td>
                  <td className="py-2 px-4 border-b">{user.registrationDate}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`px-2 py-1 rounded ${
                        user.status === "Active"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex space-x-2">
                      <ButtonPrimary
                        text="Edit"
                        className={"bg-blue-500 font-bold hover:bg-blue-700 w-20"}
                        onClick={() => handleEdit(user)}
                      />
                      <ButtonPrimary
                        text="Delete"
                        className={"bg-red-500 font-bold hover:bg-red-700 w-20"}
                        onClick={() => handleDelete(user.email)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editUser && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
                value={editUser.name}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
                value={editUser.password || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, password: e.target.value })
                }
              />
              <ButtonPrimary
                text="Save"
                className={"bg-green-500 font-bold hover:bg-green-700"}
                onClick={handleSave}
              />
              <ButtonPrimary
                text="Cancel"
                className={"bg-gray-500 font-bold hover:bg-gray-700"}
                onClick={() => setEditUser(null)}
              />
            </div>
          </div>
        )}

        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={cancelDelete}
          onConfirm={confirmDelete}
        />
      </div>
    </div>
  );
};

export default Home;
