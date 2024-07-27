import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/footer";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Simulasi login sukses
    toast.success("Login berhasil!");
    // Setelah login sukses, bisa ditambahkan redirect ke halaman utama
    // contohnya: window.location.href = "/home/";
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Admin Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-black mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="p-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-black mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="p-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>
          <ToastContainer />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
