import React from 'react'
import { joineryData } from './serviceData'

export default function Joinery() {
  return (
    <div className="bg-[#404040] w-full">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-[#A55018] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Joinery Services
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Our handyman joinery services cover everything from custom woodwork and cabinet fitting to repairs and finishing touches.
            With precision craftsmanship and attention to detail, we ensure every piece enhances your home’s beauty and functionality.
          </p>
        </header>

        {/* Services Grid: mobile 1 col, tablet 2 cols, desktop 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {joineryData.map((service, index) => (
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