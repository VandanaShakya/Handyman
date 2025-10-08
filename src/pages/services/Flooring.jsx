import React from 'react'
import { flooringData } from './serviceData'
import { motion } from 'framer-motion'

export default function Flooring() {
  return (
    <div className="bg-[#404040] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-[#A55018] mb-6">
          Flooring Services
        </h2>

        {/* Paragraph */}
        <p className="text-[#a09e9e] text-center md:text-left text-base sm:text-lg leading-relaxed max-w-4xl mx-auto md:mx-0 mb-10">
          From full installations to quick repairs, our handyman flooring services make
          your floors beautiful, safe, and long-lasting. We handle measurement, material
          recommendations, precise installation, finishing, and clean-up — all with
          professional care and attention to detail. Contact us for a free estimate and
          a hassle-free flooring upgrade.
        </p>

        <div className="space-y-12">
          {flooringData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 max-w-full ${
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
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#A55018] mb-3">
                  {item.title}
                </h2>
                <p className="font-semibold text-md sm:text-lg text-white mb-3">{item.short}</p>
                <ul className="text-white text-sm sm:text-base leading-relaxed list-disc list-inside">
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
