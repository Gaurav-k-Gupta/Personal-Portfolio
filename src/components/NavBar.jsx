import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuOptions = [
    { name: 'Education', path: '#education' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Skills', path: '/Skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              My Portfolio
            </Link>
          </div>
          {/* Center: Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuOptions.map((option) =>
              option.path.startsWith("#") ? (
                option.name === "Education" ? (
                  <a
                    key={option.name}
                    href="javascript:void(0)"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = window.location.origin + "#education";
                    }}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {option.name}
                  </a>
                ) : (
                  <a
                    key={option.name}
                    href={option.path}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {option.name}
                  </a>
                )
              ) : (
                <Link
                  key={option.name}
                  to={option.path}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {option.name}
                </Link>
              )
            )}

          </div>
          {/* Right: Desktop "Let's Talk" Button */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="flex items-center bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2 rounded"
              style={{ borderRadius: "20px" }}
            >
              <FaWhatsapp className="mr-2" />
              Let's Talk
            </Link>
          </div>
          {/* Mobile: Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button">
              <svg
                className="h-6 w-6 fill-current text-gray-600"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29A1 1 0 105.7 5.71L10.59 10.6 5.71 15.49a1 1 0 101.42 1.42L12 12.83l4.88 4.88a1 1 0 001.42-1.42L13.41 10.6l4.89-4.89z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16v2H4zM4 11h16v2H4zM4 17h16v2H4z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuOptions.map((option) => (
              <Link
                key={option.name}
                to={option.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
              >
                {option.name}
              </Link>
            ))}
          </div>
          <div className="px-4 pb-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2 rounded"
              style={{ borderRadius: "20px" }}
            >
              <FaWhatsapp className="mr-2" />
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
