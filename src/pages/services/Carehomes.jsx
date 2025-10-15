import React from 'react'
import { motion } from 'framer-motion'
import { careHomesData } from './serviceData'

const Carehomes = () => {
  return (
    <div> <div className="bg-[#404040] w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Heading */}
       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold text-[#A55018] mb-6 px-4">
 Care Home Services
</h2>
<p className="text-[#a09e9e] text-center sm:text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-6">
  Our professional handyman services ensure safety, comfort, and smooth operation for care homes in Bradford.  
  From general repairs and plumbing & electrical work to painting, decorating, and safety upgrades, we provide comprehensive maintenance solutions tailored to the unique needs of care facilities.  
  Every task is carried out with care, respect, and attention to detail, ensuring minimal disruption to residents and staff.  
  Trust B1 Handyman to keep your care home running efficiently and safely. Contact us today to schedule a consultation or emergency maintenance visit.
</p>


        <div className="space-y-12">
          {careHomesData.map((item, index) => (
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
    </div></div>
  )
}

export default Carehomes