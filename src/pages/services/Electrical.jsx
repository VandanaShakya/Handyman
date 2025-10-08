import React from 'react'
import { electricalData } from './serviceData'
import { motion } from 'framer-motion'

export default function Electrical() {
  return (
    <div className="bg-[#404040] w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-[#A55018] mb-6">
          Electrical Services
        </h2>

        {/* Paragraph */}
        <p className="text-[#a09e9e] text-center md:text-left text-base sm:text-lg leading-relaxed max-w-4xl mx-auto md:mx-0 mb-8">
          From fixing faulty wiring to installing lighting and electrical appliances, I provide a full
          range of reliable electrical services for your home or business. Whether it’s a quick repair
          or a complete rewiring project, all work is carried out safely and efficiently. I handle
          everything from socket installation and fuse box upgrades to lighting design and appliance
          connections. With attention to detail and strict safety standards, you can trust a seamless,
          dependable service. Contact me today for a free quote or to discuss your electrical needs.
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
