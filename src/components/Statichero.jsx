import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import images from '../assets/images'   

const Statichero = () => {
   const handleWhatsAppClick = () => {
    const phoneNumber = "+44 7936 475452"; 
    const message = "Hello! I’d like to know more about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <div>
        
        <div className="w-full bg-[#f0e4c5]">
  {/* Central container */}
  <div className="flex flex-col md:flex-row justify-center items-center w-[95%] md:w-[80%] mx-auto py-8">

    {/* Left Side (Hero Section) */}
   <motion.div
  className="flex flex-col items-center justify-center font-sans w-full md:w-[45%] text-center min-h-[70vh] space-y-4 px-4 sm:px-6"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-4">

    {/* Hero Line Image */}
    <motion.img
      src={images.heroLine}
      alt="Hero Line"
      className="w-full mb-0 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    />

    {/* Main heading */}
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#4b4b4b] drop-shadow-lg whitespace-nowrap"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
     B1 Handyman
    </motion.h1>

    {/* Yellow Horizontal Line */}
    <motion.div
      className="w-[70%] h-1 bg-yellow-400 my-2"
      initial={{ width: 0 }}
      animate={{ width: "70%" }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
    ></motion.div>

    {/* Tagline */}
    <motion.h1
      className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#d4a017] drop-shadow-md whitespace-nowrap px-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
    >
      Your Local Bradford, West Yorkshire and <br/> nearby areas Handyman
    </motion.h1>

    {/* Hero Left Image */}
    <motion.div
      className="mt-2 w-full flex justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
    >
      <img
        src={images.heroLeftImg}
        alt="Hero Left"
        className="max-w-full w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] rounded-lg"
      />
    </motion.div>
      <button
      onClick={handleWhatsAppClick}
      className="bg-[#4A360A] hover:bg-[#634403] text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2 cursor-pointer"
    >
      {/* WhatsApp Icon (optional, if using react-icons) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.83 11.83 0 0012 0 11.83 11.83 0 000 12a11.72 11.72 0 001.64 6l-1.09 4L4.5 20.5A11.83 11.83 0 0012 24a11.83 11.83 0 008.48-3.52A11.83 11.83 0 0024 12a11.83 11.83 0 00-3.48-8.52zM12 22a9.81 9.81 0 01-5-1.37l-.35-.21-2.93.76.78-2.85-.22-.36A9.81 9.81 0 012 12a10 10 0 0110-10 9.92 9.92 0 017 2.93A9.92 9.92 0 0122 12a10 10 0 01-10 10zm5.12-7.74c-.28-.14-1.66-.82-1.91-.91s-.44-.14-.62.14-.71.91-.87 1.09-.32.21-.6.07a8.03 8.03 0 01-2.37-1.46 8.77 8.77 0 01-1.61-2 2.22 2.22 0 01-.46-1.07c0-.11.07-.25.18-.39s.25-.32.36-.46a1.27 1.27 0 00.18-.36.44.44 0 00-.02-.39c-.07-.14-.61-1.47-.83-2s-.44-.46-.61-.46h-.53a1 1 0 00-.71.32 2.96 2.96 0 00-.93 2.14 5.12 5.12 0 001.07 2.73 11.69 11.69 0 004.48 4 13.84 13.84 0 004.48 1.39 3.8 3.8 0 002.39-.82 2.7 2.7 0 00.89-2 2.2 2.2 0 00-.14-1.04c-.09-.18-.25-.28-.53-.42z" />
      </svg>

      <span>Chat on WhatsApp</span>
    </button>

    
  </div>
</motion.div>



    {/* Right Side (Large Image) */}
    <motion.div
      className="w-full md:w-[55%] flex justify-center items-center mt-8 md:mt-0 px-4 sm:px-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
    >
      <img
        src={images.logo}
        alt="Best Handyman"
        className="w-[90%] sm:w-[80%] md:w-[70%] h-auto object-contain transition-transform hover:scale-105 duration-300 rounded-full"
        style={{ maxHeight: "600px" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x400/999999/FFFFFF?text=Image+Error";
        }}
      />
    </motion.div>
  </div>
</div>



      <Navbar />
    </div>
  )
}

export default Statichero