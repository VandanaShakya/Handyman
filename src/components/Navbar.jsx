// Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const navRef = useRef(null);

  // Close dropdown or mobile nav when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleLinkClick = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="relative w-[60%] m-auto">
      {/* Hamburger icon for mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex bg-gradient-to-t from-[#493508] to-[#6B5B36] h-16">
        <div className="flex w-full">
          {/* HOME */}
          <div className="flex-grow flex items-center h-full border-l border-gray-400">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-500 text-center flex justify-center items-center w-full h-full"
            >
              HOME
            </Link>
          </div>

          {/* SERVICES */}
          <div ref={servicesRef} className="flex-grow relative flex items-center h-full border-l border-gray-400">
            <button
              onClick={() => setIsServicesOpen((s) => !s)}
              className="text-gray-300 hover:bg-gray-500 text-center flex justify-center items-center w-full h-full px-2"
            >
              SERVICES
              <FaChevronDown
                className={`ml-2 text-sm transform transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-0 w-full rounded-md shadow-lg z-20" style={{ backgroundColor: "#f5deb3" }}>
                <div className="py-1">
                  {[
                    "Bathroom", "Odd Jobs", "Decorating", "Tiling", "Kitchen", "Plumbing",
                    "Electrical", "Carpentry", "Gardening", "Roofing", "TV Mount",
                    "Painting", "Wall Paper", "Joinery", "Fencing", "Flooring",
                    "Plastering", "Flat Packing", "Repairs"
                  ].map((service, index) => (
                    <Link
                      to={`/${service.toLowerCase().replace(/ /g, "-")}`}
                      key={index}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      onClick={handleLinkClick}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other desktop links */}
          {["MY BLOG", "REVIEW", "ABOUT", "CONTACT"].map((page, i) => (
            <div key={i} className="flex-grow flex items-center h-full border-l border-gray-400">
              <Link
                to={`/${page.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 hover:bg-gray-500 text-center flex justify-center items-center w-full h-full"
              >
                {page}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-[#493508] z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-3/4`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMobile} className="text-white">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col" ref={servicesRef}>
          <Link
            to="/"
            onClick={closeMobile}
            className="text-gray-300 hover:bg-gray-500 px-4 py-3 border-b border-gray-400"
          >
            HOME
          </Link>

          {/* SERVICES mobile */}
          <div className="border-b border-gray-400">
            <button
              onClick={() => setIsServicesOpen((s) => !s)}
              className="flex items-center justify-between text-gray-300 hover:bg-gray-500 px-4 py-3 w-full text-left"
            >
              SERVICES
              <FaChevronDown
                className={`ml-2 text-sm transform transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="bg-[#f5deb3] flex flex-col max-h-[300px] overflow-y-auto">
                {[
                  "Bathroom", "Odd Jobs", "Decorating", "Tiling", "Kitchen", "Plumbing",
                  "Electrical", "Carpentry", "Gardening", "Roofing", "TV Mount",
                  "Painting", "Wall Paper", "Joinery", "Fencing", "Flooring",
                  "Plastering", "Flat Packing", "Repairs"
                ].map((service, index) => (
                  <Link
                    to={`/${service.toLowerCase().replace(/ /g, "-")}`}
                    key={index}
                    className="px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {["MY BLOG", "REVIEW", "ABOUT", "CONTACT"].map((page, i) => (
            <Link
              to={`/${page.toLowerCase().replace(" ", "-")}`}
              key={i}
              onClick={closeMobile}
              className="text-gray-300 hover:bg-gray-500 px-4 py-3 border-b border-gray-400"
            >
              {page}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
