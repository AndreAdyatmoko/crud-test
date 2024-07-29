import React, { useState } from "react";
import axios from "axios";
import RegisterModal from "../../components/modals/registerModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const openModal = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const { token, full_name, last_login } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("full_name", full_name);
        localStorage.setItem("last_login", last_login);
        toast.success("Login berhasil!");

        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Terjadi kesalahan. Silakan coba lagi.");
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex flex-1">
        <div className="bg-primery flex-1 min-h-screen flex justify-center items-center">
          <div className="text-center bg-hover p-20 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-freeman">
              Welcome to <br /> Landing Page
            </h1>
            <h2 className="text-white font-freeman">
              Please Sign In, or Register to continue the process
            </h2>
          </div>
        </div>
        <div className="bg-fourth h-screen flex-1 min-h-screen flex justify-center items-center">
          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-freeman justify-center items-center flex p-2">
              User UI
            </h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="flex flex-col">
                <label
                  className="block mb-2 text-white font-freeman text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 focus:outline-none focus:border-secondary rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block mb-2 text-white font-freeman text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 focus:outline-none focus:border-secondary rounded-md"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-black hover:text-primery"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="bg-primery text-white px-4 py-2 rounded-lg hover:bg-hover focus:outline-none font-freeman"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="bg-fifth text-white px-4 py-2 rounded-lg hover:bg-hover focus:outline-none font-freeman"
                  onClick={openModal}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isModalOpen && <RegisterModal closeModal={closeModal} />}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
