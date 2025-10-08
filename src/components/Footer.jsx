import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Footer Text */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} HandyMan Services. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:opacity-80 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-2 rounded-full hover:opacity-80 transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded-full hover:opacity-80 transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-2 rounded-full hover:opacity-80 transition">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
