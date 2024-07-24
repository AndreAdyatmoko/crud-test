import React, { useState } from "react";

const RegisterModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    birthDate: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <div
        id="popup-modal"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
        onClick={closeModal}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl mb-4 text-gray-800 font-freeman">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="block mb-2 text-gray-800 font-freeman" htmlFor="fullName">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-gray-800 font-freeman" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-gray-800 font-freeman" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                pattern="(?=.*[a-zA-Z])(?=.*[0-9]).{6,}"
                title="Password must be at least 6 characters long and contain both letters and numbers."
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-gray-800 font-freeman" htmlFor="birthDate">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-gray-800 font-freeman" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
