import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 absolute bottom-0 left-0 w-full font-freeman">
      &copy; {new Date().getFullYear()} Andre Adyatmoko. All rights reserved.
    </footer>
  );
};

export default Footer;
