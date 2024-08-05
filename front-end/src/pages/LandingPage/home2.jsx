import React, { useState, useEffect } from "react";

// Komponen CardFlashSale
const CardFlashSale = ({ imageUrl, title, price, discount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-lg font-bold text-red-600 mb-2">{price}</p>
      <p className="text-sm text-gray-500 mb-2">Discount: {discount}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
};

// Komponen Home2
const Home2 = () => {
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const endTime = new Date("2024-08-10T00:00:00"); // Ganti dengan waktu akhir flash sale
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

  // Contoh data flash sale
  const flashSales = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 1",
      price: "$99.99",
      discount: "20%",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 2",
      price: "$89.99",
      discount: "15%",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 3",
      price: "$79.99",
      discount: "25%",
    },
  ];

  return (
    <div className="bg-customBg2 text-gray-900 flex flex-col min-h-screen py-8 px-28">
      <main className="flex-1 flex flex-col justify-start items-start p-4">
        <div>
          <p className="text-xl font-libre font-bold text-white">Today's</p>
        </div>
        <div className="w-full max-w-screen-lg flex flex-col gap-8 py-4">
          <div className="flex flex-row gap-4">
            <p className="text-3xl font-libre font-bold text-white">
              Flash Sales
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold text-white mt-1">Time Left:</p>
              <p className="text-3xl font-libre font-bold text-white">
                {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes}{" "}
                Minutes {timeLeft.seconds} Seconds
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashSales.map((item) => (
              <CardFlashSale
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                discount={item.discount}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home2;
