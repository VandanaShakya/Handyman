import React, { useState, useEffect} from 'react'
import images from '../../assets/images'
import { tilingImages } from './serviceData'

export default function Tiling() {
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
          Tiling
        </h2>

        {/* Paragraph */}
        <p className="text-[#a09e9e] text-left text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
          From just a sink splashback to a full bathroom floor, I'm happy to
          undertake all areas of tiling. Whether you'd like your grout
          re-whitening or need a whole wall to be repaired and retiled, I can
          provide a complete solution to meet your requirements. I'm happy to
          source and collect the tiles you've chosen so you've no need to lift
          any heavy boxes. All adhesives, grouts and sealants are included as
          standard. Get in touch if you would like me to have a look at your
          project and provide a free quote.
        </p>

        {/* Image Grid: mobile 1, tablet 2, desktop 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tilingImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Tiling work ${index + 1}`}
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
