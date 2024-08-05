import React from "react";
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Side from "../../assets/home/1.jpg";
import Side2 from "../../assets/home/2.jpg";
import Side3 from "../../assets/home/3.jpg";
import Side4 from "../../assets/home/4.jpg";
import Pagani from "../../assets/brand/pagani.png";
import Ferari from "../../assets/brand/ferari.png";
import Toyota from "../../assets/brand/toyota.png";
import Merci from "../../assets/brand/merci.jpg";
import Ford from "../../assets/brand/ford.png";
import Tesla from "../../assets/brand/tesla.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brandLogos = [
  { src: Pagani, alt: "Pagani" },
  { src: Ferari, alt: "Ferrari" },
  { src: Toyota, alt: "Toyota" },
  { src: Merci, alt: "Mercedes" },
  { src: Ford, alt: "Ford" },
  { src: Tesla, alt: "Tesla" },
];

const sideLogos = [
  { src: Side, alt: "Side" },
  { src: Side2, alt: "Side2" },
  { src: Side3, alt: "Side3" },
  { src: Side4, alt: "Side4" },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="bg-customBg2 text-gray-900 flex flex-col min-h-screen py-16">
      <main className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 text-3xl font-libre text-white">
            <p className="text-4xl sm:xl font-bold font-sans text-white hover:text-yellow-300">
              Ready to take your <br />
              <span className="text-teal-300 hover:text-lime-600">
                Business Growth
              </span>
              <br />
              <span className="text-white hover:text-yellow-300">
                to the next level?
              </span>
            </p>
            <p className="text-lg py-4 font-sans text-zinc-400 hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              massa libero. Egestas malesuada viverra gravida libero cursus
              nulla leo pulvinar.
            </p>
            <button className="flex items-center gap-2 text-black bg-white rounded-full focus:outline-none font-freeman hover:text-teal-300 px-4 py-2">
              <IoIosArrowDroprightCircle />
              <p className="text-xs font-sans text-center">
                Start your Free Trial
              </p>
            </button>

            <div className="py-12">
              <p className="text-base font-sans font-bold text-teal-300">
                Trusted by Leading Brands
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-start py-4">
                {brandLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full border-none">
              <Slider {...settings}>
                {sideLogos.map((art, index) => (
                  <div key={index} className="border-none outline-none">
                    <img
                      src={art.src}
                      alt={art.alt}
                      className="h-auto object-cover rounded-xl border-none outline-none"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
