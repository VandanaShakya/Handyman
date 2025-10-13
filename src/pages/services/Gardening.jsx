import React, { useState, useEffect} from 'react'
import { gardenData } from './serviceData'

export default function Gardens() {

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
    <div className="bg-[#404040] w-full">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-[#A55018] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Gardening
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From lawn care and hedge trimming to custom landscaping and seasonal garden maintenance,
            our handyman gardening services bring skill, creativity, and care to transform your
            outdoor space.
          </p>
        </header>

        {/* Services Grid: mobile 1 col, tablet 2 cols, desktop 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gardenData.map((service, index) => (
            <div key={index} className="flex flex-col items-start p-4 max-w-sm mx-auto rounded-lg">

              {/* Card Content */}
              <h3 className="text-white text-xl font-bold mb-2 border-b pb-1 border-gray-600 w-full">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base text-left mb-4">
                {service.description}
              </p>

              {/* Image */}
              <div className="w-full">
                <img 
                  src={service.imageSrc} 
                  alt={service.alt} 
                  loading="lazy"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md"
                />
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  )
}
