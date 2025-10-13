import React, { useState, useEffect} from 'react'
import { tvmountData } from './serviceData'
import { motion } from 'framer-motion'

export default function Tvmount() {
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-[#A55018] mb-6">
          TV Mounting Services
        </h2>

        {/* Paragraph */}
        <p className="text-[#a09e9e] text-center md:text-left text-base sm:text-lg leading-relaxed max-w-4xl mx-auto md:mx-0 mb-8">
          Whether it’s mounting a single TV or setting up a complete home entertainment
          system, we offer professional handyman TV mounting services to make your
          space stylish, safe, and functional. From optimal placement and secure
          fixing to neat cable management, we handle every detail with precision.
          Let us help you enjoy a clean and hassle-free entertainment setup. Contact
          us today for a free, no-obligation quote.
        </p>

        <div className="space-y-12">
          {tvmountData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 rounded-lg max-w-full ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <aside className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </aside>

              {/* Text */}
              <section className="w-full md:w-1/2">
                <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#A55018] mb-3">
                  {item.title}
                </h3>
                <p className="font-semibold text-md sm:text-lg text-white mb-3">{item.short}</p>
                <ul className="text-white text-sm sm:text-base leading-relaxed list-disc list-inside space-y-1">
                  {item.long.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </section>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
