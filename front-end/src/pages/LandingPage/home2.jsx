import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Product1 from "../../assets/product/1.jpg";
import Product2 from "../../assets/product/2 (2).jpg";
import Product3 from "../../assets/product/3 (2).jpg";
import Product4 from "../../assets/product/4.jpg";
import Product5 from "../../assets/product/5.jpg";
import Product6 from "../../assets/product/6.jpg";
import Product7 from "../../assets/product/7.jpg";
import Product8 from "../../assets/product/8.jpg";
import Product9 from "../../assets/product/9.jpg";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import  {showWarningToast} from "../../components/toastify/toast";


const Products = [
  { imageUrl: Product1, title: "Product 1", price: "$10.00", discount: "10%" },
  { imageUrl: Product2, title: "Product 2", price: "$20.00", discount: "20%" },
  { imageUrl: Product3, title: "Product 3", price: "$30.00", discount: "30%" },
  { imageUrl: Product4, title: "Product 4", price: "$40.00", discount: "40%" },
  { imageUrl: Product5, title: "Product 5", price: "$50.00", discount: "50%" },
  { imageUrl: Product6, title: "Product 6", price: "$60.00", discount: "60%" },
  { imageUrl: Product7, title: "Product 7", price: "$70.00", discount: "70%" },
  { imageUrl: Product8, title: "Product 8", price: "$80.00", discount: "80%" },
  { imageUrl: Product9, title: "Product 9", price: "$90.00", discount: "90%" },
];

const CardFlashSale = ({ imageUrl, title, price, discount, isLoggedIn }) => {
  const handleActionClick = () => {
    if (!isLoggedIn) {
      showWarningToast("You must log in first!");
    } else {
      // Implement action here if the user is logged in
    }
  };

  return (
    <div className="bg-customBg rounded-xl shadow-md p-4 flex flex-col items-center mx-2">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 overflow-hidden rounded-lg mb-4"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-white font-libre">
        {title}
      </h3>
      <p className="text-md sm:text-lg font-bold text-white font-libre">
        {price}
      </p>
      <p className="text-sm text-red-500 mb-2">Discount: {discount}</p>

      <div className="flex gap-8 lg:gap-10 md:gap-8 justify-center items-center mt-4 w-full">
        <button
          className="text-red-500 hover:text-red-700 transition duration-300"
          onClick={handleActionClick}
        >
          <FaHeart className="w-5 h-5 lg:w-8 lg:h-8" />
        </button>
        <button
          className="text-white bg-blue-500 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-hover transition duration-300"
          onClick={handleActionClick}
        >
          Buy Now
        </button>
        <button
          className="text-slate-400 hover:text-white transition duration-300"
          onClick={handleActionClick}
        >
          <FaShoppingCart className="w-5 h-5 lg:w-8 lg:h-8" />
        </button>
      </div>
    </div>
  );
};

const Home2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate user login status
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Simulate checking if user is logged in
    const checkLoginStatus = () => {
      // Simulate login check with localStorage or other method
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const endTime = new Date("2024-09-10T00:00:00"); // Set your flash sale end time here
    const now = new Date();
    const difference = endTime - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  }

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
    <div className="bg-customBg2 text-gray-900 flex flex-col max-h-fit p-4 sm:px-8 lg:px-28">
      <main className="flex-1 flex flex-col justify-center items-start px-4">
        <div>
          <p className="text-xl font-libre font-bold text-white flex gap-2">
            <div className="w-3 h-8 bg-white rounded-md"></div>Today's
          </p>
        </div>
        <div className="w-full max-w-screen-lg flex flex-col gap-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <p className="text-2xl sm:text-3xl font-libre font-bold text-white">
              Flash Sales
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-lg sm:text-xl font-bold text-white mt-1">
                Time Left:
              </p>
              <p className="text-2xl sm:text-3xl font-libre font-bold text-white">
                {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes}{" "}
                Minutes {timeLeft.seconds} Seconds
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {Products.map((item) => (
              <CardFlashSale
                key={item.title}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                discount={item.discount}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </Slider>
          <div className="flex justify-center w-full">
            <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-hover w-44 transition duration-300">
              View All Products
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home2;
