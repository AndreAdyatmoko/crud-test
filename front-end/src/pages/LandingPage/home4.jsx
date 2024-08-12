import React from "react";
import Prod1 from "../../assets/product/prod1.jpg";
import Prod2 from "../../assets/product/prod2.jpg";
import Prod3 from "../../assets/product/prod3.jpg";
import Prod4 from "../../assets/product/prod4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  { imageUrl: Prod1, title: "Product 1", price: "$10.00" },
  { imageUrl: Prod2, title: "Product 2", price: "$20.00" },
  { imageUrl: Prod3, title: "Product 3", price: "$30.00" },
  { imageUrl: Prod4, title: "Product 4", price: "$40.00" },
];

const Home4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-customBg2 text-gray-900 p-4 sm:px-8 lg:px-28">
      <main className="flex-1 flex flex-col items-start px-4">
        {/* Judul Section */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-8 bg-white rounded-md"></div>
          <p className="text-xl font-libre font-bold text-white">This Month</p>
        </div>

        {/* Subjudul */}
        <div className="w-full max-w-screen-lg flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-2xl sm:text-3xl font-libre font-bold text-white">
              Best Selling Products
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-hover">
              View All Products
            </button>
          </div>
        </div>

        {/* Slider Produk */}
        <div className="w-full max-w-screen-lg py-8">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-2">
                <div className="bg-customBg p-4 rounded-md text-white relative">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-lg font-semibold">{product.title}</p>
                  <p className="text-md">{product.price}</p>

                  {/* Actions: Like, Cart, Buy Now */}
                  <div className="flex gap-1 sm:gap-2 md:gap-8 lg:gap-8 justify-center mt-2 sm:mt-4 w-full">
                    <button className="text-red-500 hover:text-red-700">
                      <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-10 md:h-10" />
                    </button>
                    <button className="text-white bg-blue-500 px-1 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-lg hover:bg-hover">
                      <span className="text-xs sm:text-sm md:text-base block md:hidden">
                        Buy
                      </span>
                      <span className="text-xs sm:text-sm md:text-lg hidden md:block">
                        Buy Now
                      </span>
                    </button>
                    <button className="text-slate-400 hover:text-white">
                      <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 md:w-10 md:h-10" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default Home4;
