import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#0284C7] text-white pt-4 mt-10">
      <div className="container mx-auto px-4 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand & Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">My Portfolio</h2>
            <p className="text-sm text-gray-200 mt-2">
              A creative hub for web development, design, and innovation.
            </p>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/gupta.gaaurav/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gaurav-kumar-25554430b/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-300 opacity-50" />

        <div className="flex flex-col md:flex-row justify-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
