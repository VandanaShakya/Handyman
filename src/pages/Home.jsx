import React from 'react'
import { Link } from 'react-router-dom';
import images from '../assets/images';
import Form from '../components/Form';


import {
  FaBath,
  FaTools,
  FaPaintRoller,
  FaUtensils,
  FaThLarge, 
  FaWrench,
  FaPlug,
  FaTint,
  FaSeedling,
  FaRulerCombined,
  FaFillDrip,
  FaHammer,
  
} from "react-icons/fa";



const Home = () => {
  return (
    <>
      {/*  home next section */}
      <div className="min-h-screen bg-neutral-700 font-sans text-white p-4 sm:p-8 md:p-12 relative overflow-hidden">
      <div className="h-auto bg-neutral-700 font-sans text-white p-4 sm:p-8 md:p-12 relative overflow-hidden">
  <div className="relative max-w-6xl mx-auto pt-10 pb-16 flex flex-col lg:flex-row items-center justify-between gap-8">

    {/* Left Image */}
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
      <img
        src={images.plumber1}
        alt="Left Worker"
        className="max-w-full h-auto object-contain rounded-lg shadow-lg"
      />
    </div>

    {/* Text Content */}
    <div className="w-full lg:w-2/4 text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 uppercase tracking-wider text-amber-500">
        My Mission
      </h1>

      <p className="text-lg sm:text-xl text-slate-300 mb-6">
        HomeWorks Handyman Services is your one-stop solution for all of your home improvement needs.
      </p>

      <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8">
        Serving South Manchester and beyond, HomeWorks Handyman services provides a fresh approach to hiring a tradesman through my commitment to:
      </p>

      <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 flex-wrap mb-16">
        <div
          className="flex items-center space-x-2 p-3 bg-neutral-600 rounded-full shadow-md transition duration-300 hover:bg-amber-600 cursor-pointer"
          onClick={() => handleServiceClick("Quality")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap">Quality</span>
        </div>

        <div
          className="flex items-center space-x-2 p-3 bg-neutral-600 rounded-full shadow-md transition duration-300 hover:bg-amber-600 cursor-pointer"
          onClick={() => handleServiceClick("Reliability")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap">Reliability</span>
        </div>

        <div
          className="flex items-center space-x-2 p-3 bg-neutral-600 rounded-full shadow-md transition duration-300 hover:bg-amber-600 cursor-pointer"
          onClick={() => handleServiceClick("Trust")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v10l2-2h3a4 4 0 0 0 4-4V6a2 2 0 0 0-2-2h-3l-2.5 2.5a1.5 1.5 0 0 1-2.25 0z" />
            <path d="M21 9v2a4 4 0 0 1-4 4h-3L10 17v-7h1a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2h-1" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap">Trust</span>
        </div>

        <div
          className="flex items-center space-x-2 p-3 bg-neutral-600 rounded-full shadow-md transition duration-300 hover:bg-amber-600 cursor-pointer"
          onClick={() => handleServiceClick("Value")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap">Value</span>
        </div>

        <button
          className="ml-0 sm:ml-4 px-6 py-3 bg-amber-700 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition duration-200 uppercase tracking-widest text-sm"
          onClick={() => handleServiceClick("Learn More")}
        >
          Learn More
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
      <img
        src={images.logo}
        alt="Right Worker"
        className="max-w-full h-auto object-contain rounded-lg shadow-lg"
      />
    </div>

  </div>
</div>


        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-neutral-600">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 uppercase tracking-wider text-white">
            Services
          </h2>
          {/* servives */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
  <Link to="/bathrooms">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("BATHROOMS")}>
      <FaBath className="text-2xl" />
      <span className="font-semibold text-lg">BATHROOMS</span>
    </button>
  </Link>

  <Link to="/odd-jobs">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("ODD JOBS")}>
      <FaTools className="text-2xl" />
      <span className="font-semibold text-lg">ODD JOBS</span>
    </button>
  </Link>

  <Link to="/decorating">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("DECORATING")}>
      <FaPaintRoller className="text-2xl" />
      <span className="font-semibold text-lg">DECORATING</span>
    </button>
  </Link>

  <Link to="/kitchens">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("KITCHENS")}>
      <FaUtensils className="text-2xl" />
      <span className="font-semibold text-lg">KITCHENS</span>
    </button>
  </Link>

  <Link to="/tiling">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("TILING")}>
      <FaThLarge className="text-2xl" />
      <span className="font-semibold text-lg">TILING</span>
    </button>
  </Link>

  <Link to="/repairs">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("REPAIRS")}>
      <FaWrench className="text-2xl" />
      <span className="font-semibold text-lg">REPAIRS</span>
    </button>
  </Link>

  <Link to="/electrical">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("ELECTRICAL")}>
      <FaPlug className="text-2xl" />
      <span className="font-semibold text-lg">ELECTRICAL</span>
    </button>
  </Link>

  <Link to="/plumbing">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("PLUMBING")}>
      <FaTint className="text-2xl" />
      <span className="font-semibold text-lg">PLUMBING</span>
    </button>
  </Link>

  <Link to="/gardens">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("GARDENS")}>
      <FaSeedling className="text-2xl" />
      <span className="font-semibold text-lg">GARDENS</span>
    </button>
  </Link>

  <Link to="/flooring">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("FLOORING")}>
      <FaRulerCombined className="text-2xl" />
      <span className="font-semibold text-lg">FLOORING</span>
    </button>
  </Link>

  <Link to="/plastering">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] transition-shadow duration-300" onClick={() => handleServiceClick("PLASTERING")}>
      <FaFillDrip className="text-2xl" />
      <span className="font-semibold text-lg">PLASTERING</span>
    </button>
  </Link>

  <Link to="/carpentry">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-amber-700 transition-shadow duration-300" onClick={() => handleServiceClick("CARPENTRY")}>
      <FaHammer className="text-2xl" />
      <span className="font-semibold text-lg">CARPENTRY</span>
    </button>
  </Link>
</div>


        </div>


      </div>



  {/* third section */}

    <div className="min-h-screen bg-neutral-700 font-sans text-white p-4 sm:p-8 md:p-12">
            
            {/* Content Wrapper */}
            <div className="max-w-6xl mx-auto">
                
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 uppercase tracking-wider text-white">
                        My Work
                    </h1>
                    {/* Decorative Divider */}
                    <div className="w-24 h-1 mx-auto bg-amber-600 rounded-full"></div>
                </div>

                {/* Portfolio Grid - Responsive 2x3 layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* Item 1: Stairs/Shelves */}
                    <div className="bg-neutral-800 p-2 rounded-xl shadow-2xl transition duration-300 hover:ring-4 hover:ring-amber-500/50">
                        {/* USER ACTION REQUIRED: Replace the 'src' below with your actual image URL. */}
                        <img 
                            src={images.blocksImg} 
                            alt="Custom wooden shelves installed in a stairwell" 
                            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-inner"
                            onError={(e) => {
                                // Fallback logic if the image URL is broken
                                e.target.style.display = 'none'; 
                                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-sm font-semibold text-amber-500 bg-neutral-600 rounded-lg p-4 h-48 sm:h-64">Image Slot Ready (Insert URL)</div>';
                            }}
                        />
                    </div>

                    {/* Item 2: Bathroom/Shower */}
                    <div className="bg-neutral-800 p-2 rounded-xl shadow-2xl transition duration-300 hover:ring-4 hover:ring-amber-500/50">
                        {/* USER ACTION REQUIRED: Replace the 'src' below with your actual image URL. */}
                        <img 
                            src={images.doorImg} 
                            alt="Tiled bathroom wall with a new shower fixture" 
                            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-inner"
                            onError={(e) => {
                                e.target.style.display = 'none'; 
                                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-sm font-semibold text-amber-500 bg-neutral-600 rounded-lg p-4 h-48 sm:h-64">Image Slot Ready (Insert URL)</div>';
                            }}
                        />
                    </div>

                    {/* Item 3: Fence/Gate */}
                    <div className="bg-neutral-800 p-2 rounded-xl shadow-2xl transition duration-300 hover:ring-4 hover:ring-amber-500/50">
                        {/* USER ACTION REQUIRED: Replace the 'src' below with your actual image URL. */}
                        <img 
                            src={images.greelImg} 
                            alt="Freshly painted white picket fence and gate installation" 
                            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-inner"
                            onError={(e) => {
                                e.target.style.display = 'none'; 
                                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-sm font-semibold text-amber-500 bg-neutral-600 rounded-lg p-4 h-48 sm:h-64">Image Slot Ready (Insert URL)</div>';
                            }}
                        />
                    </div>

                    {/* Item 4: Brickwork/Roof Repair */}
                    <div className="bg-neutral-800 p-2 rounded-xl shadow-2xl transition duration-300 hover:ring-4 hover:ring-amber-500/50">
                        {/* USER ACTION REQUIRED: Replace the 'src' below with your actual image URL. */}
                        <img 
                            src={images.houseImg} 
                            alt="Brickwork repair near a window on a residential building" 
                            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-inner"
                            onError={(e) => {
                                e.target.style.display = 'none'; 
                                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-sm font-semibold text-amber-500 bg-neutral-600 rounded-lg p-4 h-48 sm:h-64">Image Slot Ready (Insert URL)</div>';
                            }}
                        />
                    </div>

                    {/* Item 5: Exterior Home View */}
                    <div className="bg-neutral-800 p-2 rounded-xl shadow-2xl transition duration-300 hover:ring-4 hover:ring-amber-500/50">
                        {/* USER ACTION REQUIRED: Replace the 'src' below with your actual image URL. */}
                        <img 
                            src={images.showerImg} 
                            alt="Exterior view of a newly serviced brick home with clean windows" 
                            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-inner"
                            onError={(e) => {
                                e.target.style.display = 'none'; 
                                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-sm font-semibold text-amber-500 bg-neutral-600 rounded-lg p-4 h-48 sm:h-64">Image Slot Ready (Insert URL)</div>';
                            }}
                        />
                    </div>

                    {/* Item 6: Wooden Door */}
                    <div className="bg-neutral-800 p-2 rounded-xl shadow-2xl transition duration-300 hover:ring-4 hover:ring-amber-500/50">
                        {/* USER ACTION REQUIRED: Replace the 'src' below with your actual image URL. */}
                        <img 
                            src={images.tilesImg} 
                            alt="Wooden door stripped and prepped for refinishing" 
                            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-inner"
                            onError={(e) => {
                                e.target.style.display = 'none'; 
                                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-sm font-semibold text-amber-500 bg-neutral-600 rounded-lg p-4 h-48 sm:h-64">Image Slot Ready (Insert URL)</div>';
                            }}
                        />
                    </div>

                </div>
                
                {/* Social Feed Placeholder Block */}
                <div className="mt-16 mb-8 flex justify-center">
                    <div className="w-full max-w-lg p-6 bg-neutral-800 border-2 border-amber-600 rounded-lg text-center shadow-xl">
                        <p className="text-sm text-slate-400">
                            <span className="font-bold text-lg">🌐 POWR</span>
                        </p>
                        <p className="text-base font-semibold mt-1">
                            Social Feed - Create your own for free!
                        </p>
                    </div>
                </div>
                
                {/* Optional: Separator for next section (if there was one) */}
                <div className="w-3/4 h-px mx-auto bg-neutral-600 mt-16"></div>

            </div>
            
        </div>

        <Form />


{/* home last section */}
   <div className="h-auto bg-gray-700 p-8 flex flex-col items-center justify-center">
      
      {/* Container for the reCAPTCHA box and Send button */}
      <div className="mb-8 flex items-start space-x-4">
        
        {/* The reCAPTCHA/Verification Box */}
        <div className="bg-white p-2 border-2 border-red-500 rounded shadow-lg w-72 relative">
          
          {/* Red error message at the top */}
          <p className="text-red-600 text-sm mb-2 font-sans">
            Verification challenge expired. Check the checkbox again.
          </p>
          
          {/* Checkbox and "I'm not a robot" text */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border-2 border-red-500 bg-white flex items-center justify-center">
              {/* This is the red square outline for the checkbox */}
            </div>
            <span className="text-gray-800 text-base">I'm not a robot</span>
            
            {/* The reCAPTCHA logo/image container */}
            <div className="ml-auto flex flex-col items-center">
              {/* A placeholder for the reCAPTCHA image */}
              <div className="w-10 h-10 bg-purple-200 border border-gray-300 rounded-sm mb-1">
                {/* Placeholder for the abstract image */}
              </div>
              <span className="text-xs text-gray-500">reCAPTCHA</span>
              <span className="text-xs text-blue-500 cursor-pointer">Privacy - Terms</span>
            </div>
          </div>
        </div>
        
        {/* Send Button */}
        <button className="bg-gray-800 text-gray-400 font-semibold py-2 px-6 rounded shadow-md hover:bg-gray-900 transition duration-150 mt-1">
          Send
        </button>
      </div>
      
      {/* --- Buttons Section --- */}

      {/* Back to Top Button */}
      <button className="bg-gradient-to-t from-yellow-700 to-yellow-800 text-white font-bold py-3 px-12 rounded shadow-2xl hover:opacity-90 transition duration-150 mb-8">
        Back to Top
      </button>   
    </div>
    </>
  )
}

export default Home