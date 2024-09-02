import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import eggTrayImage from "../assets/Images/pngwing.com (2).png";

const Banner = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [100, -150]);

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center h-screen w-full bg-[#efdfdc] px-8 md:px-16">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Welcome to Egg Bucket
        </h1>
        <h5 className="text-xs md:text-2xl font-semibold text-[#f87709]">
          "Think of an egg, think of Egg Bucket"
        </h5>

        <p className="text-lg md:text-2xl text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
          Where freshness meets quality. Delivering eggs straight from the farm
          to your table.
        </p>
        <button className="self-center md:self-start bg-[#f87709] text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105">
          About Us
        </button>
      </div>

      <div className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
        <svg
          className="absolute top-0 right-0 w-full h-full z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
        >
          <circle cx="400" cy="400" r="230" fill="#f87709" opacity="1" />
        </svg>

        <motion.img
          src={eggTrayImage}
          alt="Egg Tray"
          className="w-1/2 md:w-4/5 relative z-10 drop-shadow-lg"
          style={{ y }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>
    </div>
  );
};

export default Banner;
