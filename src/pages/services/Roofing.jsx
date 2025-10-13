import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { roofingData } from './serviceData'

const Roofing = () => {
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
   <div>
  <div className="bg-[#404040]">
    <div className="max-w-6xl mx-auto p-6">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold mb-6"
        style={{ color: "#A55018" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Roofing Services
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
       Professional handyman roofing services designed to keep your home safe, durable, and weatherproof. 
       From minor repairs to complete roof installations, we handle every detail with precision and care. Our
        expert team uses high-quality materials and proven techniques to ensure lasting results. Whether it’s fixing 
        leaks, replacing damaged shingles, or upgrading your entire roof, we deliver reliable workmanship, exceptional
         service, and peace of mind for every project.
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roofingData.map((card, index) => (
          <motion.div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden bg-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 bg-[#a09e9e]">
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: "#A55018" }}
              >
                {card.title}
              </h2>

              {/* List */}
              <ul className="list-disc list-inside mb-2 text-gray-700">
                {card.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default Roofing