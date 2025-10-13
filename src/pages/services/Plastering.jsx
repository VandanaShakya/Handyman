import React, { useState, useEffect} from 'react'
import { plasteringImages } from './serviceData'

export default function Plastering() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-[#A55018] mb-6">
          Plastering Services
        </h2>

        {/* Paragraph */}
        <p className="text-[#a09e9e] text-left text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Our professional handyman plastering services ensure smooth, durable, and perfectly finished walls and ceilings.
          Whether you’re repairing damaged surfaces, preparing walls for painting, or giving your home a fresh new look,
          we provide top-quality workmanship using reliable tools and materials.
          From small patch repairs to full wall and ceiling plastering, we handle every detail with precision and care.
          We also offer skimming, re-plastering, and texture removal for a flawless, even surface.
          Contact us today for a free estimate and let our experts restore the beauty of your interiors.
        </p>

        {/* Image Grid: mobile 1 col, tablet 2 cols, desktop 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plasteringImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Plastering work ${index + 1}`}
                loading="lazy"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}