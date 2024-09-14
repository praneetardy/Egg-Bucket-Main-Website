import React, { useState, useEffect } from "react";
import { FaTimes, FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../assets/Images/logo-egg-png.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // State for About Us submenu in mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutMenu = () => {
    setAboutOpen(!aboutOpen);
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
              isScrolled ? "w-32 md:w-48" : "w-36 md:w-52"
            }`}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-6 text-lg md:text-xl">
            <li>
              <Link
                to="/"
                className="relative block px-3 py-2 text-gray-600 group"
              >
                <span className="relative z-10 transition-colors text-lg group-hover:text-gray-950">
                  Home
                </span>
                <div className="absolute inset-0 bg-[#f87709] bg-opacity-70 h-1.5 rounded-lg top-3/4 transform origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>

            {/* About Us with Submenu for Desktop */}
            <li className="relative group">
              <a
                href="#about"
                className="relative block px-3 py-2 text-gray-600 group flex items-center"
              >
                <span className="relative z-10 transition-colors text-lg group-hover:text-gray-950">
                  About us
                </span>
                {/* Arrow */}
                <span className="ml-2 transform transition-transform duration-300 group-hover:rotate-180">
                  &#x25BE;
                </span>
                <div className="absolute inset-0 bg-[#f87709] bg-opacity-70 h-1.5 rounded-lg top-3/4 transform origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
              </a>

              <ul className="absolute hidden group-hover:block bg-gradient-to-r from-white to-gray-100 rounded-xl w-64 text-gray-800 shadow-lg mt-2 py-4 px-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ease-in-out">
                {/* Dropdown Arrow */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

                {/* Dropdown Links */}
                <li className="relative group">
                  <Link
                    to="/ourfounders"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-105 py-3 px-3 rounded-lg hover:bg-white hover:shadow-lg"
                  >
                    {/* Icon */}
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#f87709] transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Our Founders
                  </Link>
                </li>

                <li className="relative group">
                  <Link
                    to="/timeline"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-105 py-3 px-3 rounded-lg hover:bg-white hover:shadow-lg"
                  >
                    {/* Icon */}
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#f87709] transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h8m-4 8h.01"
                      />
                    </svg>
                    Timeline
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/careers"
                className="relative block px-3 py-2 text-gray-600 group"
              >
                <span className="relative z-10 transition-colors text-lg group-hover:text-gray-950">
                  Career
                </span>
                <div className="absolute inset-0 bg-[#f87709] bg-opacity-70 h-1.5 rounded-lg top-3/4 transform origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="relative block px-3 py-2 text-gray-600 group"
              >
                <span className="relative z-10 transition-colors text-lg group-hover:text-gray-950">
                  FAQ's
                </span>
                <div className="absolute inset-0 bg-[#f87709] bg-opacity-70 h-1.5 rounded-lg top-3/4 transform origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                className="relative block px-3 py-2 text-gray-600 group"
              >
                <span className="relative z-10 transition-colors text-lg group-hover:text-gray-950">
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-[#f87709] bg-opacity-70 h-1.5 rounded-lg top-3/4 transform origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
              </Link>
            </li>
          </ul>

          <Link to="#order" className="hidden md:inline-block">
            <button className="bg-[#f87709] text-white px-8 py-3 rounded-full transition-transform transform hover:scale-105 flex items-center space-x-2">
              <span>Order Now</span>
            </button>
          </Link>
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
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            {/* About Us Mobile with Dropdown */}
            <li>
              <button
                onClick={toggleAboutMenu}
                className="text-gray-600 hover:text-gray-800 flex items-center justify-between w-full transition-colors"
              >
                About Us
                <FaChevronDown
                  className={`ml-2 transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <ul className="pl-4 space-y-2 mt-2">
                  <li>
                    <Link
                      to="/ourfounders"
                      className="text-gray-600 hover:text-gray-800 transition-transform hover:scale-105"
                      onClick={toggleMenu}
                    >
                      Our Founders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/timeline"
                      className="text-gray-600 hover:text-gray-800 transition-transform hover:scale-105"
                      onClick={toggleMenu}
                    >
                      Timeline
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/careers"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
                onClick={toggleMenu}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link to="#order" className="block mt-4">
            <button className="w-full bg-[#f87709] text-white py-3 rounded-full transition-transform transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Order Now</span>
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
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
