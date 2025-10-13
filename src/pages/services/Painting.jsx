import React, { useState, useEffect} from 'react';
import { paintingImages } from './serviceData';

export default function Painting() {
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
    <div className="bg-[#404040] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-left font-bold text-[#A55018] mb-6">
          Painting Services
        </h2>

        {/* Paragraph */}
        <p className="text-[#a09e9e] text-left text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
          From refreshing a single wall to painting an entire room or home, our handyman painting services ensure a flawless finish.
          Whether you need interior walls, ceilings, trims, or doors painted, we provide professional, high-quality work.
          We use premium paints and tools to achieve a smooth, long-lasting finish, with careful preparation to protect your space.
          We can also assist with color selection and sourcing materials so you have a stress-free painting experience.
          Get in touch for a free quote and let us bring your vision to life.
        </p>

        {/* Image Grid: mobile 1 col, tablet 2 cols, desktop 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paintingImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Painting work ${index + 1}`}
                loading="lazy"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}