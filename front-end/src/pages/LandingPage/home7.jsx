import React from "react";
import Logo from "../../assets/baner/baner1.jpg";
import Logo2 from "../../assets/baner/baner3.jpg";
import Logo3 from "../../assets/baner/baner5.jpg";

const Home7 = () => {
  return (
    <div className="bg-customBg2 text-gray-900 p-4 sm:px-8 lg:px-28">
      <main className="flex-1 flex flex-col items-start px-4">
        <div className="flex items-start gap-2">
          <div className="w-3 h-8 bg-white rounded-md"></div>
          <p className="text-xl font-libre font-bold text-white">Feature</p>
        </div>

        {/* Subjudul */}
        <div className="w-full max-w-screen-lg flex flex-col gap-8 py-4">
          <p className="text-2xl sm:text-3xl font-libre font-bold text-white">
            New Arrival
          </p>
        </div>

        {/* Grid untuk gambar */}
        <div className="w-full max-w-5xl mx-auto px-2">
          {/* Gambar besar */}
          <div className="relative mb-4">
            <img
              src={Logo}
              alt="baner 1"
              className="w-full h-64 sm:h-80 lg:h-96 rounded-md object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-6">
              <span className="text-red-600 text-2xl md:text-3xl lg:text-4xl font-bold font-freeman mb-8">
                Enhance Your <br /> Vision Experience
              </span>
              <button className="bg-customBg3 text-white text-lg font-semibold py-2 px-6 rounded-md hover:bg-customBg2 transition duration-300 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                Buy Now
              </button>
            </div>
          </div>

          {/* Baris gambar kecil */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={Logo2}
              alt="baner 2"
              className="w-full h-32 sm:h-48 lg:h-60 rounded-md object-cover"
            />
            <img
              src={Logo3}
              alt="baner 3"
              className="w-full h-32 sm:h-48 lg:h-60 rounded-md object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home7;
