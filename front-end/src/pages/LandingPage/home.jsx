import React, { useState } from "react";
import Footer from "../footer/footer";
import Modal from "../../components/modals/homeOneModal";

const Home = () => {
  const textSize = "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl";
  const menuItems = ["m-abc", "KlikABC", "Info ABC"];

  const additionalItems = ["Buka Rekening Baru", "Ganti Kode Akses", "Flazz"];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-primery p-4 flex-col sm:flex-row h-screen">
      <div className={`flex-1 text-white ${textSize}`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
          <span className="font-jaro">ABC</span>mobile
        </h1>
      </div>
      <div className="bg-secondary border rounded text-white  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border-b-2 p-2 hover:bg-white hover:text-primery cursor-pointer font-freeman"
            onClick={() => {
                if (item === "m-abc") {
                  openModal();
                }
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="bg-primery  text-white  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4">
        {additionalItems.map((item, index) => (
          <div
            key={index}
            className="rounded-md p-2 hover:bg-white hover:text-primery cursor-pointer font-freeman bg-secondary"
            style={{ marginBottom: "8px" }}
          >
            {item}
          </div>
        ))}
      </div>
      <Footer />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Home;
