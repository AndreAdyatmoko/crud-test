import React from "react";

const Home3 = () => {
  return (
    <div className="bg-customBg2 text-gray-900 flex flex-col min-h-screen p-4 sm:px-8 lg:px-28">
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
        <div className="w-full max-w-screen-lg flex flex-wrap gap-4 px-4">
          <div className="flex-1 min-w-[150px] h-32 flex items-center justify-center border border-white rounded-md text-white bg-gray-800 text-center">
            Phones
          </div>
          <div className="flex-1 min-w-[150px] h-32 flex items-center justify-center border border-white rounded-md text-white bg-gray-800 text-center">
            Laptops
          </div>
          <div className="flex-1 min-w-[150px] h-32 flex items-center justify-center border border-white rounded-md text-white bg-gray-800 text-center">
            Accessories
          </div>
          <div className="flex-1 min-w-[150px] h-32 flex items-center justify-center border border-white rounded-md text-white bg-gray-800 text-center">
            Home Appliances
          </div>
          <div className="flex-1 min-w-[150px] h-32 flex items-center justify-center border border-white rounded-md text-white bg-gray-800 text-center">
            Fashion
          </div>
          <div className="flex-1 min-w-[150px] h-32 flex items-center justify-center border border-white rounded-md text-white bg-gray-800 text-center">
            Toys
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home3;
