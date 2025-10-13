import React, { useState, useEffect} from 'react'
import { kitchenData } from './serviceData';


const Kitchen = () => {
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
      <div className='bg-[#404040] w-[100%]'>
  <section className="py-16 md:py-24 bg-[#c0c0c0] font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-4xl font-bold tracking-wider uppercase text-[#BD8901] mb-2">
          WHY CHOOSE US?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Your Trusted Handyman & Kitchen Experts
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Whether it’s a complete kitchen setup or everyday handyman work, we deliver
          reliable, quality service with precision and care — turning your vision into reality.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-12 gap-6 auto-rows-fr">
        {kitchenData.map((card) => (
          <div
            key={card.id}
            className="col-span-12 md:col-span-4 rounded-xl shadow-lg overflow-hidden relative h-96 flex flex-col justify-end text-white"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative p-6 flex flex-col justify-end h-full">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className=" border-t text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

    )
}

export default Kitchen