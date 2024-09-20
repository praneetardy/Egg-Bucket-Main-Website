import React, { useState } from "react";
import bglogo from "../assets/Images/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlinePlus,
} from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    "Patli Gali, Mota Bazzar, Jammu "
  );
  const [temporaryAddress, setTemporaryAddress] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleAddressPopup = () => {
    setShowAddressPopup(!showAddressPopup);
  };

  const handleAddressSelect = (address) => {
    setTemporaryAddress(address);
  };

  const saveSelectedAddress = () => {
    if (temporaryAddress) {
      setSelectedAddress(temporaryAddress);
    }
    toggleAddressPopup();
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-10">
      <div className="flex justify-between items-center px-4 py-3 lg:px-8">
        <div className="flex items-center justify-between w-[330px]">
          {/* Logo */}
          <div className="flex items-center">
            <img src={bglogo} className="h-[55px] w-[100px]" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 text-gray-800">
            <li className="relative text-lg hover:text-orange-500 cursor-pointer transition-transform transform hover:scale-105 group">
              <span>About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-1000 group-hover:w-full"></span>
            </li>
            <li className="relative text-lg hover:text-orange-500 cursor-pointer transition-transform transform hover:scale-105 group">
              <span>Subscribe</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-1000 group-hover:w-full"></span>
            </li>
          </ul>
        </div>

        {/* Address Display Component (hidden in mobile view) */}
        <div className="relative">
          <div
            className="hidden lg:flex items-center space-x-2 cursor-pointer ml-[650px]"
            onClick={toggleAddressPopup}
          >
            <span className="text-lg hover:text-orange-500 text-gray-800 truncate">
              {selectedAddress}
            </span>
            <AiOutlineDown className="text-gray-800" />
          </div>

          {/* Address Popup positioned just below */}
          {showAddressPopup && (
            <div className="absolute top-full mt-9 left-[650px] w-96 bg-white p-6 rounded-lg shadow-lg z-20">
              <h2 className="text-xl font-bold mb-4">Select an Address</h2>
              <ul className="space-y-3">
                {[
                  "Patli Gali, Mota Bazzar, Jammu ",
                  "Slim Street, Fat Market, Bengaluru ",
                ].map((address, index) => (
                  <li
                    key={index}
                    onClick={() => handleAddressSelect(address)}
                    className={`cursor-pointer p-2 rounded-md transition-all duration-300 transform ${
                      temporaryAddress === address
                        ? "border-2 border-orange-500 text-gray-800 scale-25"
                        : "bg-gray-200 text-gray-800 hover:border-orange-400 hover:border-2"
                    }`}
                    style={{
                      backgroundColor:
                        temporaryAddress === address ? "white" : "",
                    }}
                  >
                    {address}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex justify-between">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-transform duration-300 flex items-center transform hover:scale-105"
                  onClick={() =>
                    alert("Add new address functionality coming soon!")
                  }
                >
                  <AiOutlinePlus className="mr-2" /> Add New Address
                </button>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300"
                  onClick={saveSelectedAddress}
                >
                  Save
                </button>
              </div>
              <button
                className="mt-4 w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300"
                onClick={toggleAddressPopup}
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Search, Cart, and Login for Desktop */}
        <div className="hidden lg:flex items-center space-x-6 mx-3">
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer text-gray-800 hover:text-orange-500 transition-transform transform hover:scale-110"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-6">
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer text-gray-600 hover:text-orange-500 transition-transform transform hover:scale-110"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105">
            Login
          </button>
          {!nav ? (
            <AiOutlineMenu
              size={25}
              className="cursor-pointer transition-transform transform hover:scale-110"
              onClick={handleNav}
            />
          ) : (
            <AiOutlineClose
              size={25}
              className="cursor-pointer transition-transform transform hover:scale-110"
              onClick={handleNav}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white p-6 my-4 text-center transition-transform duration-300 ease-in-out transform rounded-lg shadow-lg ${
          nav ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-8 bg-orange-500 rounded-lg">
          <ul className="text-white space-y-6 text-lg">
            <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              Subscribe
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              Terms and Conditions
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
