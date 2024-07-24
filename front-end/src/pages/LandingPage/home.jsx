import React from "react";
import { CgProfile } from "react-icons/cg";

import Footer from "../footer/footer";

const Home = () => {
  // Ambil nama pengguna dan waktu login terakhir dari localStorage
  const username = localStorage.getItem("username") || "User";
  const lastLogin = localStorage.getItem("loginTime") || "Never";

  return (
    <div className="bg-fourth text-white flex flex-col h-screen">
      <header className="bg-secondary p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome, {username}!</h1>
          <CgProfile className="text-3xl" />
          
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="bg-secondary p-6 rounded-lg shadow-xl max-w-2xl w-full">
          <h2 className="text-2xl mb-4 font-semibold">Dashboard</h2>
          <p className="text-lg mb-4">Hello, {username}!</p>
          <p className="text-lg mb-6">Last login: {lastLogin}</p>
          <div className="flex flex-col items-center">
            <button
              onClick={() => window.location.href = "/change-password"}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 mb-4"
            >
              Change Password
            </button>
            <button
              onClick={() => window.location.href = "/logout"}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Log Out
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
