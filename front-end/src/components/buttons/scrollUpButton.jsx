// ScrollUpButton.jsx
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollUpButton = ({ showScroll, scrollToTop }) => {
  if (!showScroll) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-teal-500 text-white p-2 rounded-full shadow-lg hover:bg-teal-600 transition duration-300"
    >
      <IoIosArrowUp size={24} />
    </button>
  );
};

export default ScrollUpButton;
