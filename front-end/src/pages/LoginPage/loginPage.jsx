import React, { useState } from "react";
import RegisterModal from "../../components/modals/registerModal";
import Footer from "../footer/footer";

const LoginPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              Bookface
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label
                  className="block mb-2 text-white font-freeman text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
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
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 focus:outline-none focus:border-secondary rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="bg-primery text-white px-4 py-2 rounded-lg hover:bg-hover focus:outline-none font-freeman"
                >
                  Login
                </button>
                  <button
                    className="bg-fifth text-white px-4 py-2 rounded-lg hover:bg-hover focus:outline-none font-freeman "
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
      <Footer />
    </div>
  );
};

export default LoginPage;
