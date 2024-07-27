import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login-admin",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        const { token, username } = response.data; // Pastikan server mengembalikan username
        // Simpan token dan username di local storage
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        // Tampilkan toast notifikasi
        toast.success("Login berhasil!");
        // Redirect ke halaman /home setelah delay untuk menampilkan toast
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      } else {
        // Tampilkan toast notifikasi error
        toast.error(response.data.message || "Login gagal!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Login Admin</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
