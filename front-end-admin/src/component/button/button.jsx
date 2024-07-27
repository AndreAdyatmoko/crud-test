import React from "react";

export default function ButtonPrimary({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-primery  rounded-md hover:bg-hover focus:outline-none  items-center py-2 px-1 text-center ${className}`}
    >
      {text}
    </button>
  );
}

