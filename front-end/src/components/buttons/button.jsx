import React from "react";

export default function ButtonPrimary({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-primery w-full  rounded-md hover:bg-hover focus:outline-none font-freeman sm:text-lg md:text-xl lg:text-2xl xl:text-3xl items-center py-1 text-center ${className}`}
    >
      {text}
    </button>
  );
}

