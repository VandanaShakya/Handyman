import React, { useState, useEffect} from 'react'
import { electricalData } from './serviceData'
import { motion } from 'framer-motion'

export default function Electrical() {
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
       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold text-[#A55018] mb-6 px-4">
  Electrical Services
</h2>

<p className="text-[#a09e9e] text-center sm:text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-6">
  Our expert electrical services ensure safety, reliability, and efficiency for your home or business.  
  From wiring installations and lighting upgrades to fault repairs and safety inspections, we provide comprehensive solutions tailored to your needs.  
  Every job is handled with precision and care, using high-quality materials to meet industry standards.  
  Trust us to keep your electrical systems running smoothly and safely. Contact us today for a free consultation and estimate.
</p>


        <div className="space-y-12">
          {electricalData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
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
                <p className="text-white text-sm sm:text-base leading-relaxed">{item.long}</p>
              </section>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
