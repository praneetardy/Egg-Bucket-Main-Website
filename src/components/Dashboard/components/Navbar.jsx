import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/images/logo-egg-png.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-16 flex justify-between items-center h-20">
        <div
          className={`flex items-center transition-transform duration-300 transform ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          <img
            src={logo}
            alt="Egg Bucket Logo"
            className={`transition-all duration-500 ease-in-out ${
              isScrolled ? "w-48" : "w-52"
            }`}
          />
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-10 text-lg md:text-xl">
            <li>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/account/orders"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
              >
                Account
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
              >
                Contact
              </a>
            </li>
          </ul>

          <a href="#order" className="hidden md:inline-block">
            <button className="bg-[#f87709] text-white px-8 py-3 rounded-full transition-transform transform hover:scale-105 flex items-center space-x-2">
              <span>Admin & Order</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-8 h-8" />
            ) : (
              <FaBars className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
                onClick={toggleMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
                onClick={toggleMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>

          <a href="#order" className="block mt-4">
            <button className="w-full bg-[#f87709] text-white py-3 rounded-full transition-transform transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Admin & Order</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
