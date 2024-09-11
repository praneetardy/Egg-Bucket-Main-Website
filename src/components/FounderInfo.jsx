{
  /*// src/components/FounderInfo.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Make sure to have framer-motion installed

const FounderInfo = () => {
  return (
    <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
      
      <div className="md:w-1/2">
        <h4 className="text-sm uppercase font-semibold text-gray-600">
          Mission and Goals
        </h4>
        <h3 className="text-3xl font-bold mt-2 text-gray-800">Our Story</h3>
        <p className="mt-4 text-gray-600 leading-relaxed">
          The event was a success, and we realized good ideas can come from anyone, anywhere, at any time. They also realized there were many others who wanted to support good ideas. 
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          So, they left the Bank to launch the world’s first crowdfunding community in 2002. Today, people in more than 165 countries can easily share their ideas, and individual donors and companies can easily support vetted nonprofits.
        </p>
      </div>

      
      <motion.div
        className="md:w-1/3 flex flex-col items-center"
        initial={{ x: 100, opacity: 0 }} // Slide from right
        animate={{ x: 0, opacity: 1 }} // Slide to original position
        transition={{ duration: 0.8 }} // Animation duration
      >
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1212338933/photo/two-funny-white-eggs-with-faces-drawn-on-them-easter-eggs-with-funny-faces-broken-egg-my-head.jpg?s=612x612&w=0&k=20&c=-X0nyQxbJhR-iGoq96CmAy6Ex6Dr9OVsb6XsCSq5LuI=" // Replace with the actual image path
            alt="Founder"
            className="w-64 h-64 object-cover border-4 border-gray-400" // Square image with 64x64 size and border
          />
        </div>
        <h4 className="mt-4 text-lg font-semibold text-gray-800">ROHIT WANI</h4>
        <p className="text-gray-600">Co-Founder</p>
      </motion.div>
    </div>
  );
};

export default FounderInfo;*/
}

import React from "react";
import { motion } from "framer-motion";

// URLs for the images
const founderImageURL =
  "https://media.istockphoto.com/id/1212338933/photo/two-funny-white-eggs-with-faces-drawn-on-them-easter-eggs-with-funny-faces-broken-egg-my-head.jpg?s=612x612&w=0&k=20&c=-X0nyQxbJhR-iGoq96CmAy6Ex6Dr9OVsb6XsCSq5LuI="; // Replace with the actual URL
const cofounderImageURL =
  "https://media.istockphoto.com/id/1212338933/photo/two-funny-white-eggs-with-faces-drawn-on-them-easter-eggs-with-funny-faces-broken-egg-my-head.jpg?s=612x612&w=0&k=20&c=-X0nyQxbJhR-iGoq96CmAy6Ex6Dr9OVsb6XsCSq5LuI="; // Replace with the actual URL
const backgroundImageURL =
  "https://www.shutterstock.com/image-photo/funny-easter-eggs-drawn-faces-260nw-154582889.jpg"; // Replace with the actual background image URL

const FounderSection = () => {
  return (
    <section className="relative min-h-screen bg-white text-[#f87709] flex justify-center items-center py-20 px-8">
      {/* Background image with transparency */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: `url(${backgroundImageURL})` }}
      ></div>

      {/* Overlay for content */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section with text */}
        <div className="md:w-1/2 text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            "Think of an egg, Think of EggBucket!"
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-700">
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
        <div className="md:w-1/2 flex flex-col space-y-8 md:space-y-0 md:flex-row justify-evenly items-center md:ml-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={founderImageURL}
                alt="Founder"
                className="w-48 h-48 object-cover border-4 border-[#f87709] mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Name</h3>
              <p className="text-sm font-light text-gray-600">Founder</p>
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
                src={cofounderImageURL}
                alt="Co-Founder"
                className="w-48 h-48 object-cover border-4 border-[#f87709] mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Rohit Wani
              </h3>
              <p className="text-sm font-light text-gray-600">Co-Founder</p>
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

export default FounderSection;
