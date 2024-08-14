import React from "react";
import Product1 from "../../assets/product/ex1.jpg";
import Product2 from "../../assets/product/ex2.jpg";
import Product3 from "../../assets/product/ex3.jpg";
import Product4 from "../../assets/product/ex5.jpg";
import Product5 from "../../assets/product/ex6.jpg";
import Product6 from "../../assets/product/ex4.jpg";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { showWarningToast } from "../../components/toastify/toast";

const Products = [
  { imageUrl: Product1, title: "Product 1", price: "$10.00" },
  { imageUrl: Product2, title: "Product 2", price: "$20.00" },
  { imageUrl: Product3, title: "Product 3", price: "$30.00" },
  { imageUrl: Product4, title: "Product 4", price: "$40.00" },
  { imageUrl: Product5, title: "Product 5", price: "$50.00" },
  { imageUrl: Product6, title: "Product 6", price: "$60.00" },
];

const CardFlashSale = ({ imageUrl, title, price, isLoggedIn }) => {
  const handleActionClick = (action) => {
    if (!isLoggedIn) {
      showWarningToast("You must log in first!");
    } else {
      if (action === "buy") {
        // Implement action here if the user is logged in
      }
    }
  };

  return (
    <div className="bg-customBg rounded-xl shadow-md p-2 sm:p-4 flex flex-col items-center mx-1">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-24 md:h-32 overflow-hidden text-xs sm:text-sm md:text-base rounded-lg mb-2 sm:mb-4"
      />
      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white font-libre">
        {title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base font-bold text-white font-libre">
        {price}
      </p>

      {/* Actions: Like, Cart, Buy Now */}
      <div className="flex gap-1 sm:gap-2 lg:gap-8 justify-center mt-2 sm:mt-4 w-full">
        <button className="text-red-500 hover:text-red-700 transition duration-300">
          <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          onClick={() => handleActionClick("like")} />
        </button>
        <button
          onClick={() => handleActionClick("buy")}
          className="text-white bg-blue-500 px-1 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-lg hover:bg-hover transition duration-300"
        >
          <span className="text-xs sm:text-sm md:text-base block md:hidden">
            Buy
          </span>
          <span className="text-xs sm:text-sm md:text-base hidden md:block transition duration-300">
            Buy Now
          </span>
        </button>
        <button className="text-slate-400 hover:text-white transition duration-300">
          <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          onClick={() => handleActionClick("cart")} />
        </button>
      </div>
    </div>
  );
};

const Home6 = () => {
  const isLoggedIn = false; // Ganti dengan kondisi login yang sebenarnya

  return (
    <div className="bg-customBg2 text-gray-900 flex flex-col max-h-fit p-4 sm:px-8 lg:px-28">
      <main className="flex-1 flex flex-col justify-center items-start px-4">
        <div>
          <p className="text-xl font-libre font-bold text-white flex gap-2">
            <div className="w-3 h-8 bg-white rounded-md"></div>Our Products
          </p>
        </div>
        <div className="w-full max-w-screen-lg flex flex-col gap-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <p className="text-2xl sm:text-3xl font-libre font-bold text-white">
              Explore Our Products{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {Products.slice(0, 6).map((item) => (
              <CardFlashSale
                key={item.title}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </div>
          <div className="flex justify-center w-full">
            <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-hover w-44 transition duration-300">
              View All Products
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home6;
