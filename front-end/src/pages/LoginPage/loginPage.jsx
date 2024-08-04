import React, { useState } from "react";
import axios from "axios";
import RegisterModal from "../../components/modals/registerModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import artImage from "../../assets/home/Art.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
      <div className="bg-white h-screen flex-1 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-libre text-center justify-center items-center flex p-2">
            Welcome Back 👋
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black justify-center font-libre items-center flex p-2 font-semibolde">
            Today is a new day. It's your day. You shape it. Sign in to start
            managing your projects.
          </p>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="flex flex-col p-2">
              <label
                className="block mb-2 text-black text-base font-libre"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-customBorder bg-customBorder2 px-3 py-2 focus:outline-none rounded-xl"
                required
              />
            </div>
            <div className="flex flex-col px-2">
              <label
                className="block mb-2 text-black text-base font-libre"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-2 border-customBorder bg-customBorder2 px-3 py-2 focus:outline-none rounded-xl"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-3"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex justify-end px-2">
              <p>
                <a
                  href="/forgot-password"
                  className="font-libre text-base text-blue-700 hover:underline"
                >
                  Forgot password?
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="bg-customBg text-white px-4 py-2 rounded-lg hover:bg-hover hover:text-black focus:outline-none font-libre"
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
      <div className="hidden md:flex flex-1">
        <div className="w-full h-screen">
        <img
          src={artImage}
          alt="Login"
          className="w-full h-screen p-8 rounded-3xl"
        />
        </div>
      </div>
      {isModalOpen && <RegisterModal closeModal={closeModal} />}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
