import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import images from '../assets/images'   

const Statichero = () => {
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
      HomeWorks GB
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
      Your Local Chorlton Handyman
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
        className="max-w-full w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] rounded-lg shadow-lg"
      />
    </motion.div>

    {/* Badges */}
    <motion.div
      className="flex flex-wrap justify-center items-center gap-4 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
    >
      {[images.excellenceImg, images.masterManchesterImg, images.handymanImg].map(
        (imgSrc, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={imgSrc}
              alt={`Badge ${index + 1}`}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain rounded-full transition-transform hover:scale-105 duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/120x120/999999/FFFFFF?text=Logo%20Error";
              }}
            />
          </div>
        )
      )}
    </motion.div>
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