import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col space-y-4 bg-white p-2 rounded-r-lg shadow-lg">
        <li>
          <a
            href="https://www.instagram.com/egg.bucket/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#f87709] transition-transform duration-300 transform hover:scale-110"
          >
            <FaInstagram size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/eggbucket?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#f87709] transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
