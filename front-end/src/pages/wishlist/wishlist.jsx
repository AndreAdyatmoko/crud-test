import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Product1 from "../../assets/product/ex1.jpg";
import Product2 from "../../assets/product/ex2.jpg";
import Product3 from "../../assets/product/ex3.jpg";
import Product4 from "../../assets/product/ex5.jpg";
import Product5 from "../../assets/product/ex6.jpg";
import Product6 from "../../assets/product/ex4.jpg";

const Products = [
  { imageUrl: Product1, title: "Product 1", price: "$10.00" },
  { imageUrl: Product2, title: "Product 2", price: "$20.00" },
  { imageUrl: Product3, title: "Product 3", price: "$30.00" },
  { imageUrl: Product4, title: "Product 4", price: "$40.00" },
  { imageUrl: Product5, title: "Product 5", price: "$50.00" },
  { imageUrl: Product6, title: "Product 6", price: "$60.00" },
];

const CardFlashSale = ({ imageUrl, title, price, onDelete, onSelect, isSelected }) => {
  return (
    <div className="relative bg-customBg rounded-xl shadow-md p-2 sm:p-4 flex flex-col items-center mx-1">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-lg mb-2 sm:mb-4"
      />
      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white font-libre">
        {title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base font-bold text-white font-libre">
        {price}
      </p>
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 bg-red-500 text-white hover:bg-red-700 p-1 rounded-full transition duration-200"
      >
        <FaTrashAlt />
      </button>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        className="absolute top-2 left-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded text-blue-500 focus:ring-blue-400"
      />
    </div>
  );
};

const Wishlist = () => {
  const [products, setProducts] = useState(Products);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleDelete = (title) => {
    const updatedProducts = products.filter((item) => item.title !== title);
    setProducts(updatedProducts);
  };

  const handleSelect = (title) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(title)
        ? prevSelected.filter((item) => item !== title)
        : [...prevSelected, title]
    );
  };

  const moveToCart = () => {
    console.log("Moving to cart:", selectedProducts);
    // Implementasikan logika untuk memindahkan produk yang dipilih ke keranjang di sini
  };

  return (
    <div className="py-14 bg-customBg2">
      <div className="bg-customBg2 text-gray-900 flex flex-col max-h-fit p-4 sm:px-8 lg:px-28">
        <main className="flex-1 flex flex-col justify-center items-start px-4">
          <div className="w-full max-w-screen-lg flex flex-col gap-8 py-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <p className="text-2xl sm:text-3xl font-libre font-thin text-white">
                Wishlist
              </p>
              <button
                onClick={moveToCart}
                className="text-white bg-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-600"
              >
                Move Selected To Bag
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {products.slice(0, 6).map((item) => (
                <CardFlashSale
                  key={item.title}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  onDelete={() => handleDelete(item.title)}
                  onSelect={() => handleSelect(item.title)}
                  isSelected={selectedProducts.includes(item.title)}
                />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-600 w-44 transition duration-300">
                View All Products
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wishlist;
