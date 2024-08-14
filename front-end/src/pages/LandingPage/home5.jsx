import React from "react";
import Logo from "../../assets/baner/baner2.jpg";
import  {showWarningToast}  from "../../components/toastify/toast";

const Home5 = () => {
  const isLoggedIn = false; // Ganti dengan kondisi login yang sebenarnya

  const handleBuyNowClick = () => {
    if (!isLoggedIn) {
      showWarningToast("You must log in first!");
    } else {
      // Implementasikan logika tambahan di sini jika pengguna sudah login
  
    }
  };

  return (
    <div className="bg-customBg2 text-gray-900 p-4 sm:px-8 lg:px-28">
      <main className="flex-1 flex flex-col items-center px-4">
        <div className="w-full max-w-5xl mx-auto px-2 relative">
          <img
            src={Logo}
            alt="baner"
            className="w-full h-48 sm:h-64 lg:h-72 rounded-md object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6">
            <span className="text-red-600 text-3xl md:text-4xl sm:text-2xl font-bold font-freeman mb-8">
              Enhance Your <br /> Vision Experience
            </span>
            <button
              onClick={handleBuyNowClick}
              className="bg-customBg3 text-white text-lg font-semibold py-2 px-6 rounded-md hover:bg-customBg2 transition duration-300 absolute bottom-4 left-1/2 transform -translate-x-1/2"
            >
              Buy Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home5;
