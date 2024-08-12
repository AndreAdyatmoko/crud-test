import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BsSmartwatch } from "react-icons/bs";

const Home3 = () => {
  const categories = [
    { name: "Phones", icon: <IoPhonePortraitOutline size={34} /> },
    { name: "Camera", icon: <FaCamera size={34} /> },
    { name: "HeadPhones", icon: <FaHeadphones size={34} /> },
    { name: "Gaming", icon: <SiYoutubegaming size={34} /> },
    { name: "Computers", icon: <MdComputer size={34} /> },
    { name: "SmartWatch", icon: <BsSmartwatch size={34} /> },
  ];

  return (
    <div className="bg-customBg2 text-gray-900 flex flex-col h-full p-4 sm:px-8 lg:px-28">
      <main className="flex-1 flex flex-col items-start px-4">
        {/* Judul Section */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-8 bg-white rounded-md"></div>
          <p className="text-xl font-libre font-bold text-white">Categories</p>
        </div>

        {/* Subjudul */}
        <div className="w-full max-w-screen-lg flex flex-col gap-8 py-4">
          <p className="text-2xl sm:text-3xl font-libre font-bold text-white">
            Browse By Category
          </p>
        </div>

        {/* Daftar Kategori */}
        <div className="w-full max-w-screen-lg flex flex-wrap gap-4 px-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-customBg flex-1 min-w-[150px] h-32 flex items-center justify-center border border-white rounded-md text-white text-center"
            >
              <button className="w-full h-full hover:bg-customBg3 hover:rounded-md hover:font-bold flex flex-col items-center justify-center gap-2 transition duration-300">
                {category.icon}
                <span>{category.name}</span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home3;
