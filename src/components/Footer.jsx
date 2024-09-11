import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/Images/logo-egg-png.png";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-900 text-white z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm space-y-6 md:space-y-0 md:space-x-8">
          {/* Company Info */}
          <div className="flex-1 mt-10">
            <img src={logo} alt="Egg Bucket Logo" className="w-36 mb-2" />
            <p className="mb-2">
              At Egg Bucket, we are dedicated to providing fresh and
              high-quality eggs straight from our farm to your table.
            </p>
            <div className="flex items-center mb-1">
              <FaMapMarkerAlt className="text-[#f87709] mr-2" />
              <p>
                Kacklewalls Nutrition Pvt. Ltd. ITI Layout, HSR,
                Bengaluru-560068
              </p>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-[#f87709] mr-2" />
              <p>info@eggbucket.in</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 text-center mt-10 ">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 ">
              <a href="/" className="hover:text-[#f87709]  transition-colors">
                Home
              </a>
              <a
                href="/careers"
                className="hover:text-[#f87709] transition-colors"
              >
                Career
              </a>
              <a
                href="/ourfounders"
                className="hover:text-[#f87709] transition-colors"
              >
                Our Founders
              </a>
              <a
                href="/contact-us"
                className="hover:text-[#f87709] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex-1 -mt-10">
            <h3 className="text-xs font-thin mb-2">
              Get the latest news about Egg Bucket's exciting product updates.
            </h3>
            <form>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow p-1.5 mb-2 border border-gray-400 rounded text-black"
                />
                <button
                  type="submit"
                  className="w-27 mb-2 bg-[#f87709] text-white p-1.5 rounded hover:bg-[#f15c00] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-3">
            <a
              href="https://www.instagram.com/egg.bucket/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#f87709] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/eggbucket?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#f87709] transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-400 py-3 mt-4 text-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Egg Bucket. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
