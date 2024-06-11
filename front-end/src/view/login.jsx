import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const mainMenu = [
    "m-info",
    "m-transfer",
    "m-Payment",
    "m-Comm",
    "Cardless",
    "m-Admin",
    "Flazz",
    "Tap",
  ];

  return (
    <div className="bg-third p-4 flex flex-col h-screen relative">
      <div className="bg-white p-2 absolute top-0 right-0 w-full  z-10">
        <div className="justify-between flex">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primery">
            <span className="font-jaro">ABC</span>mobile
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primery">
            <span className="font-jaro">LogOut</span>
          </h1>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center my-16 gap-4 ">
        {mainMenu.map((menu, index) => (
          <div>
            <div
              key={index}
              className="flex justify-center items-center m-2 p-4 h-24 rounded-2xl bg-primery hover:bg-blue-500 text-white hover:text-blue-950 font-freeman sm:text-sm md:text-base lg:text-lg xl:text-xl sm:w-32 md:w-48 lg:w-48 xl:w-64 cursor-pointer"
            >
              <div>{"Adalah"}</div>
            </div>
            <div
              key={index}
              className="font-sans sm:text-sm md:text-base lg:text-lg xl:text-xl sm:w-32 md:w-48 lg:w-64 xl:w-72 flex justify-center items-center text-white"
            >
              {menu}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white text-primery text-center p-4 absolute bottom-0 left-0 w-full font-freeman z-10 flex justify-around">
        <div>Home</div>
        <div>Transaksi</div>
        <div>Notifikasi</div>
        <Link to="/login/profile">
          <div>Profile</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
