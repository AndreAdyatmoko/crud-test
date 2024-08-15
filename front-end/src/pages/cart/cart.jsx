import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Product1 from "../../assets/product/ex1.jpg";
import Product2 from "../../assets/product/ex2.jpg";
import Product3 from "../../assets/product/ex3.jpg";
import Product4 from "../../assets/product/ex5.jpg";
import Product5 from "../../assets/product/ex6.jpg";
import Product6 from "../../assets/product/ex4.jpg";

const Products = [
  { imageUrl: Product1, title: "Product 1", price: 10.00, quantity: 1 },
  { imageUrl: Product2, title: "Product 2", price: 20.00, quantity: 1 },
  { imageUrl: Product3, title: "Product 3", price: 30.00, quantity: 1 },
  { imageUrl: Product4, title: "Product 4", price: 40.00, quantity: 1 },
  { imageUrl: Product5, title: "Product 5", price: 50.00, quantity: 1 },
  { imageUrl: Product6, title: "Product 6", price: 60.00, quantity: 1 },
];

const CartItem = ({ imageUrl, title, price, quantity, onQuantityChange, onDelete }) => {
  return (
    <div className="flex items-center justify-between gap-2 p-2 bg-customBg rounded-lg shadow-md sm:gap-4 sm:p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover rounded-lg"
      />
      <div className="flex flex-col flex-1 px-2 sm:px-4">
        <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white">
          {title}
        </h3>
        <p className="text-xs sm:text-sm lg:text-base font-bold text-white">
          ${price.toFixed(2)}
        </p>
        <input
          type="number"
          value={quantity}
          onChange={onQuantityChange}
          min="1"
          className="w-16 py-1 mt-1 text-xs sm:text-sm text-center rounded-md border-2 border-gray-300"
        />
        <p className="mt-1 text-xs sm:text-sm lg:text-base font-bold text-white">
          ${(price * quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 transition duration-200 flex-shrink-0"
      >
        <FaTrashAlt size="1.25rem" />
      </button>
    </div>
  );
};

const CartTotal = ({ subtotal, shipping = 5.00 }) => {
  const total = subtotal + shipping;

  return (
    <div className="bg-customBg rounded-lg p-4 sm:p-6 shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Cart Total</h2>
      <div className="flex justify-between text-white font-libre">
        <p className="text-sm sm:text-base">Subtotal:</p>
        <p className="text-sm sm:text-base font-bold">${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-white font-libre mt-2">
        <p className="text-sm sm:text-base">Shipping:</p>
        <p className="text-sm sm:text-base font-bold">${shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-white font-libre mt-2">
        <p className="text-sm sm:text-base font-semibold">Total:</p>
        <p className="text-sm sm:text-base font-bold">${total.toFixed(2)}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 w-full rounded-lg hover:bg-blue-600 transition duration-300">
        Process to Checkout
      </button>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 mx-1 rounded-full ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          } transition duration-300`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

const Cart = () => {
  const [products, setProducts] = useState(Products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleDelete = (title) => {
    const updatedProducts = products.filter((item) => item.title !== title);
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (title, quantity) => {
    const updatedProducts = products.map((item) =>
      item.title === title ? { ...item, quantity: parseInt(quantity, 10) } : item
    );
    setProducts(updatedProducts);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const subtotal = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="py-14 bg-customBg2">
      <div className="bg-customBg2 text-gray-900 flex flex-col max-h-fit p-4 sm:px-8 lg:px-28">
        <main className="flex-1 flex flex-col justify-center items-start px-4">
          <div className="w-full max-w-screen-lg flex flex-col gap-8 py-4">
            <p className="text-2xl sm:text-3xl font-libre font-thin text-white">
              Shopping Cart
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                {currentProducts.map((item) => (
                  <CartItem
                    key={item.title}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    onQuantityChange={(e) =>
                      handleQuantityChange(item.title, e.target.value)
                    }
                    onDelete={() => handleDelete(item.title)}
                  />
                ))}
              </div>
              <CartTotal subtotal={subtotal} />
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            <div className="flex justify-center w-full mt-8">
              <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-600 w-44 transition duration-300">
                Update Cart
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
