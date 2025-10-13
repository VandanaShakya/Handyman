import React, { useState, useEffect} from 'react'
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
  const [loading, setLoading] = useState(true)
    
      useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
          setLoading(false)
        }, 1000) // simulate 1 second loading
    
        return () => clearTimeout(timer)
      }, [])
    
      if (loading) {
        return (
          <div className=" w-full flex flex-col justify-center items-center h-[200px]">
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-t-[#A55018] border-gray-300 rounded-full animate-spin"></div>
            {/* Loading text */}
            <p className="mt-4 text-[#A55018] text-lg font-semibold animate-pulse">
              Loading...
            </p>
          </div>
        )
      }
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
          
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap">Quality</span>
        </div>

        <div
          className="flex items-center space-x-2 p-3 bg-neutral-600 rounded-full shadow-md transition duration-300 hover:bg-amber-600 cursor-pointer"
        
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap">Reliability</span>
        </div>

        <div
          className="flex items-center space-x-2 p-3 bg-neutral-600 rounded-full shadow-md transition duration-300 hover:bg-amber-600 cursor-pointer"
        
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v10l2-2h3a4 4 0 0 0 4-4V6a2 2 0 0 0-2-2h-3l-2.5 2.5a1.5 1.5 0 0 1-2.25 0z" />
            <path d="M21 9v2a4 4 0 0 1-4 4h-3L10 17v-7h1a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2h-1" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap">Trust</span>
        </div>

        <div
          className="flex items-center space-x-2 p-3 bg-neutral-600 rounded-full shadow-md transition duration-300 hover:bg-amber-600 cursor-pointer"
          
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap">Value</span>
        </div>

        <button
          className="ml-0 sm:ml-4 px-6 py-3 bg-amber-700 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition duration-200 uppercase tracking-widest text-sm"
         
        >
          Learn More
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
      <img
        src={images.plumber2}
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
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300" >
      <FaBath className="text-2xl" />
      <span className="font-semibold text-lg">BATHROOMS</span>
    </button>
  </Link>

  <Link to="/odd-jobs">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300" >
      <FaTools className="text-2xl" />
      <span className="font-semibold text-lg">ODD JOBS</span>
    </button>
  </Link>

  <Link to="/decorating">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300" >
      <FaPaintRoller className="text-2xl" />
      <span className="font-semibold text-lg">DECORATING</span>
    </button>
  </Link>

  <Link to="/kitchen">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300" >
      <FaUtensils className="text-2xl" />
      <span className="font-semibold text-lg">KITCHENS</span>
    </button>
  </Link>

  <Link to="/tiling">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300">
      <FaThLarge className="text-2xl" />
      <span className="font-semibold text-lg">TILING</span>
    </button>
  </Link>

  <Link to="/repairs">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300" >
      <FaWrench className="text-2xl" />
      <span className="font-semibold text-lg">REPAIRS</span>
    </button>
  </Link>

  <Link to="/electrical">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300">
      <FaPlug className="text-2xl" />
      <span className="font-semibold text-lg">ELECTRICAL</span>
    </button>
  </Link>

  <Link to="/plumbing">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300">
      <FaTint className="text-2xl" />
      <span className="font-semibold text-lg">PLUMBING</span>
    </button>
  </Link>

  <Link to="/gardening">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300" >
      <FaSeedling className="text-2xl" />
      <span className="font-semibold text-lg">GARDENS</span>
    </button>
  </Link>

  <Link to="/flooring">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300" >
      <FaRulerCombined className="text-2xl" />
      <span className="font-semibold text-lg">FLOORING</span>
    </button>
  </Link>

  <Link to="/plastering">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300">
      <FaFillDrip className="text-2xl" />
      <span className="font-semibold text-lg">PLASTERING</span>
    </button>
  </Link>

  <Link to="/carpentry">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#4b3a13] cursor-pointer transition-shadow duration-300" >
      <FaHammer className="text-2xl" />
      <span className="font-semibold text-lg">CARPENTRY</span>
    </button>
  </Link>

   <Link to="/flat-packing">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#493508] cursor-pointer transition-shadow duration-300">
      <FaHammer className="text-2xl" />
      <span className="font-semibold text-lg">Flat Packing</span>
    </button>
  </Link>
   <Link to="/tv-mount">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#493508] cursor-pointer transition-shadow duration-300" >
      <FaHammer className="text-2xl" />
      <span className="font-semibold text-lg">TV Mount</span>
    </button>
  </Link>

   <Link to="/painting">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#493508] cursor-pointer transition-shadow duration-300" >
      <FaHammer className="text-2xl" />
      <span className="font-semibold text-lg">Painting</span>
    </button>
  </Link>

   <Link to="/wall-paper">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#493508] cursor-pointer transition-shadow duration-300" >
      <FaHammer className="text-2xl" />
      <span className="font-semibold text-lg">Wall Paper</span>
    </button>
  </Link>

  <Link to="/joinery">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#493508] cursor-pointer transition-shadow duration-300">
      <FaHammer className="text-2xl" />
      <span className="font-semibold text-lg">Joinery</span>
    </button>
  </Link>

  <Link to="/fencing">
    <button className="flex items-center space-x-3 p-5 h-24 w-full sm:w-72 rounded-xl bg-[#493508] text-white shadow-xl hover:bg-[#493508] cursor-pointer transition-shadow duration-300" >
      <FaHammer className="text-2xl" />
      <span className="font-semibold text-lg">Fencing</span>
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




    </>
  )
}

export default Home