import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import eggTrayImage from "../assets/Images/pngwing.com (2).png";
import { Link } from "react-router-dom";

const Banner = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [100, -150]);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="relative flex flex-col md:flex-row justify-between items-center h-screen w-full px-8 md:px-16"
      style={{
        background: "linear-gradient(135deg, #fef9e7 0%, #f7f2e4 100%)",
      }}
    >
      {/* Text Section */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left"
        data-aos="fade-right"
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight"
          data-aos="fade-up"
        >
          Welcome to Egg Bucket
        </h1>
        <h5
          className="text-xs md:text-2xl font-semibold text-[#f87709]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          "Think of an egg, think of Egg Bucket"
        </h5>
        <p
          className="text-lg md:text-2xl text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Where freshness meets quality. Delivering eggs straight from the farm
          to your table.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <Link to="/ourfounders">
            <button
              className="bg-[#f87709] text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              About Us
            </button>
          </Link>
          <Link to="/contact-us">
            {" "}
            {/* Wrap button with Link */}
            <button
              className="bg-none text-[#000000] px-6 py-3 border border-[#f87709] rounded-full transition-all duration-300 hover:bg-[#f87709] hover:text-[#ffffff]"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Join as Retailer
            </button>
          </Link>
        </div>
      </div>

      <div
        className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0"
        data-aos="fade-left"
      >
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
