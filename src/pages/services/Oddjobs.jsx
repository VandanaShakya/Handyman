import React from 'react'
import { motion } from 'framer-motion'
import { oddJobsCards } from './serviceData'


const Oddjobs = () => {
  return (
    <>
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
      Odd Jobs Services
    </motion.h1>

    {/* Paragraph */}
    <motion.p
      className="text-white mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      A wide range of handyman services for all those small but important jobs around your home. 
      We make sure every detail is handled professionally.
    </motion.p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {oddJobsCards.map((card, index) => (
        <motion.div
          key={index}
          className="border rounded-lg shadow-lg overflow-hidden bg-gray-100" // light gray card background
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

    </>
  )
}

export default Oddjobs