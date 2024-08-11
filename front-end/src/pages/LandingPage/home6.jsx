import React from "react";
import Product1 from "../../assets/product/ex1.jpg";
import Product2 from "../../assets/product/ex2.jpg";
import Product3 from "../../assets/product/ex3.jpg";
import Product4 from "../../assets/product/ex5.jpg";
import Product5 from "../../assets/product/ex6.jpg";
import Product6 from "../../assets/product/ex4.jpg";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Products = [
  { imageUrl: Product1, title: "Product 1", price: "$10.00", discount: "10%" },
  { imageUrl: Product2, title: "Product 2", price: "$20.00", discount: "20%" },
  { imageUrl: Product3, title: "Product 3", price: "$30.00", discount: "30%" },
  { imageUrl: Product4, title: "Product 4", price: "$40.00", discount: "40%" },
  { imageUrl: Product5, title: "Product 5", price: "$50.00", discount: "50%" },
  { imageUrl: Product6, title: "Product 6", price: "$60.00", discount: "60%" },

];

// Komponen CardFlashSale
const CardFlashSale = ({ imageUrl, title, price, discount }) => {
  return (
    <div className="bg-customBg rounded-xl shadow-md p-4 flex flex-col items-center mx-2">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 overflow-hidden rounded-lg mb-4"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-white font-libre">
        {title}
      </h3>
      <p className="text-md sm:text-lg font-bold text-white font-libre">
        {price}
      </p>
      <p className="text-sm text-red-500 mb-2">Discount: {discount}</p>

      {/* Actions: Like, Cart, Buy Now */}
      <div className="flex justify-between items-center mt-4 w-full">
        <button className="text-red-500 hover:text-red-700">
          <FaHeart size={20} />
        </button>
        <button className="text-white bg-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-hover">
          Buy Now
        </button>
        <button className="text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-hover">
          <FaShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

// Komponen Home6
const Home6 = () => {
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {Products.slice(0, 6).map((item) => (
              <CardFlashSale
                key={item.title}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                discount={item.discount}
              />
            ))}
          </div>
          <div className="flex justify-center w-full">
            <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-hover w-44">
              View All Products
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home6;
