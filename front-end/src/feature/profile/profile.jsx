import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import profileImage from "../../assets/images/profile.jpg";

const Profile = () => {
  const mainMenu = ["Username", "Phone Number", "Email", "Password"];
  const icons = [<FaUser />, <FaPhone />, <FaEnvelope />, <FaLock />];

  return (
    <div className="bg-primery h-screen text-white p-2">
      <div className="w-full border-b-2 flex justify-between ">
        <div className="font-freeman sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 flex gap-2 ">
          <FaUser/>My Profile
        </div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
        <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="font-freeman p-2 w-fit">
        {mainMenu.map((menu, index) => (
          <div
            key={index}
            className="flex items-center justify-between sm:text-sm md:text-base lg:text-lg xl:text-xl sm:w-32 md:w-48 lg:w-48 xl:w-64 cursor-pointer"
          >
            <div className="flex items-center">
              <span className="mr-2">{icons[index]}</span>
              {menu}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
