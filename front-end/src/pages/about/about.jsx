import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import AboutUs from "../../assets/about/About.png";

const About = () => {
  return (
    <div className="bg-customBg2 text-gray-900 flex flex-col min-h-screen py-16">
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {" "}
            <img src={AboutUs} alt="About" className="max-w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 text-3xl font-libre text-white">
            <div className="py-8">
              <p className="text-base font-sans text-teal-300">About Us </p>
            </div>
            <div>
              <p className="text-6xl sm:xl font-sans max-w-full">
                The core mission <br /> <span>behind all our</span> <br />{" "}
                <span>work</span>
              </p>
            </div>
            <div>
              <div className="flex gap-4 text-teal-300 text-2xl sm:xl font-sans pt-4">
                <p>
                  330 + <br />{" "}
                  <span className="text-sm py-4 font-sans text-zinc-400 hover:text-white">
                    Companies helped
                  </span>{" "}
                </p>
                <p>
                  230 + <br />{" "}
                  <span className="text-sm py-4 font-sans text-zinc-400 hover:text-white">
                    Revenue generated
                  </span>
                </p>
              </div>
              <p className="text-sm py-4 font-sans text-zinc-400 hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut massa libero. Egestas malesuada viverra gravida libero cursus
                nulla leo pulvinar.
              </p>
            </div>
            <button className="flex items-center gap-2 text-black bg-white rounded-full focus:outline-none font-freeman hover:text-teal-300 px-4 py-2">
              <IoIosArrowDroprightCircle />
              <p className="text-xs font-sans text-center">
                Start your Free Trial
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
