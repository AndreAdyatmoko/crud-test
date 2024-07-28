import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/footer";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login-admin", {
        username: username,
        password: password
      });

      if (response.status === 200) {
        toast.success("Login berhasil!", {
          autoClose: 2000});
        // Simpan token dan username ke localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);
        // Redirect ke halaman utama
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000); // Redirect setelah 2 detik
      } else {
        toast.error("Login gagal! Silakan coba lagi.", {
          autoClose: 1000});
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Login gagal! ${error.response.data.message}`, {
          autoClose: 1000
        });
      } else {
        toast.error("Login gagal! Silakan coba lagi.", {
          autoClose: 1000
        });
      }
    }
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
