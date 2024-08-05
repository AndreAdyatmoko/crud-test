import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customBg2 border-t text-white py-6">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:space-y-0">
          {/* Logo / Brand Name */}
          <div className="text-lg font-libre font-bold mb-4 md:mb-0 w-full md:w-1/4">
            <a href="/" className="hover:underline">
              Logo
            </a>
            <p className="text-sm font-libre leading-relaxed mt-2 max-w-xs">
              We’re a team of strategic creators and digital innovators, united
              in our focus on the pursuit of mastery and joy.
            </p>
          </div>

          {/* Pages */}
          <div className="w-full md:w-1/4">
            <p className="text-lg font-libre font-bold mb-4 md:mb-0">Pages</p>
            <div className="text-sm font-libre leading-relaxed mt-2 text-zinc-400">
              <p className="hover:text-white">Home 1</p>
              <p className="hover:text-white">Home 2</p>
              <p className="hover:text-white">About</p>
              <p className="hover:text-white">Contact Us</p>
              <p className="hover:text-white">Portfolio</p>
              <p className="hover:text-white">Blog</p>
            </div>
          </div>

          {/* Utility Pages */}
          <div className="w-full md:w-1/4">
            <p className="text-lg font-libre font-bold mb-4 md:mb-0">Utility Pages</p>
            <div className="text-sm font-libre leading-relaxed mt-2 text-zinc-400">
              <p className="hover:text-white">Style Guide</p>
              <p className="hover:text-white">Instruction</p>
              <p className="hover:text-white">License</p>
              <p className="hover:text-white">Changelog</p>
              <p className="hover:text-white">Error 404</p>
              <p className="hover:text-white">Password Protected</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 flex flex-col px-2">
            <p className="text-lg font-libre font-bold mb-4 md:mb-0">Newsletter</p>
            <div className="text-sm font-libre leading-relaxed mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full text-black placeholder-black border-2 border-customBorder bg-customBorder2 px-3 py-2 focus:outline-none rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          &copy; {new Date().getFullYear()} Andre Adyatmoko. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
