import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-customBg2 text-white p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-3xl font-bold font-libre">
          Logo
        </Link>
        <div className="hidden md:flex gap-4 font-libre text-lg md:text-xl text-zinc-400">
          <Link to="/" className="hover:text-white transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition duration-300">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <button className="text-2xl hover:bg-white hover:text-black p-2 rounded-full transition duration-300">
              <CgProfile />
            </button>
          ) : (
            <>
              <Link
                to="/get-in-touch"
                className="bg-white text-black font-libre px-2 py-1 rounded-full hover:font-extrabold focus:outline-none"
              >
                Get in Touch
              </Link>
              <Link
                to="/login"
                className="bg-white text-black font-libre px-2 py-1 rounded-full hover:font-extrabold focus:outline-none"
              >
                Login
              </Link>
            </>
          )}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-2 font-libre text-lg text-zinc-400">
          <Link to="/home" className="hover:text-white transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition duration-300">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
