import React from "react";
import { motion } from "framer-motion";
import FounderImage from "../assets/Images/male-avatar.png";

// URLs for the images
const backgroundImageURL =
  "https://media.istockphoto.com/id/1949882446/vector/teal-orange-grainy-background-banner-noise-texture-glowing-color-gradient-vibrant-dark.jpg?s=612x612&w=0&k=20&c=jsSZREbmeJc2h5IHF2xZi4lx7syOI7jSow0E_wr7fcY=";

const FounderInfo = () => {
  return (
    <section className="relative min-h-screen bg-white text-[#f87709] flex justify-center items-center py-28 md:py-10 px-4 md:px-8">
      {/* Background image with transparency */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: `url(${backgroundImageURL})` }}
      ></div>

      {/* Overlay for content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left Section with text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
          >
            "Think of an egg, Think of EggBucket!"
          </motion.h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            At EggBucket, we are committed to delivering excellence.
          </p>
          <p className="text-sm md:text-base mt-4 text-gray-500">
            The company places a strong emphasis on innovation in transportation
            logistics, storage solutions, and packaging technology to minimize
            product damage, to ensure that you get fresh eggs delivered directly
            from farm to doorstep.
          </p>
        </div>

        {/* Right Section with Founder and Co-Founder */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 md:space-y-0 md:flex-row justify-center lg:justify-evenly items-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={FounderImage}
                alt="Founder"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover border-4 border-[#f87709] mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                Rohan Wani
              </h3>
              <p className="text-sm md:text-base font-light text-gray-600">
                Founder
              </p>
              {/* Social media icons */}
              <div className="flex justify-center mt-2 space-x-2">
                <a href="#">
                  <i className="fab fa-facebook text-[#f87709]"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter text-[#f87709]"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram text-[#f87709]"></i>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <img
                src={FounderImage}
                alt="Co-Founder"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover border-4 border-[#f87709] mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                Rohit Wani
              </h3>
              <p className="text-sm md:text-base font-light text-gray-600">
                Co-Founder
              </p>
              {/* Social media icons */}
              <div className="flex justify-center mt-2 space-x-2">
                <a href="#">
                  <i className="fab fa-facebook text-[#f87709]"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter text-[#f87709]"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram text-[#f87709]"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderInfo;
