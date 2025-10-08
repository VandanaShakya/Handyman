import React from 'react'
import { motion } from 'framer-motion'
import { plumbingCards } from './serviceData' 

const Plumbing = () => {
  return (
    <div>
      
      <div className="bg-[#404040]">
<div className="max-w-6xl mx-auto p-6">
        
       
     {/* Heading */}
<h2 className="text-4xl md:text-5xl text-center font-bold text-[#A55018] mb-6">
  Plumbing
</h2>

{/* Paragraph */}
<p className="text-[#a09e9e] text-left text-lg leading-relaxed max-w-6xl mx-auto mb-3">
  From fixing leaks and replacing taps to installing new sinks and toilets, I offer a wide range
  of reliable plumbing services for your home. Whether it’s a minor repair or a complete bathroom
  refit, all work is carried out efficiently and to a high standard. I handle everything from
  pipe repairs and sealant replacement to fitting appliances like dishwashers and washing machines.
  With a focus on quality, safety, and neat workmanship, you can count on a smooth and stress-free
  experience. Get in touch today for a free quote or to discuss your plumbing needs.
</p>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plumbingCards.map((card, index) => (
            <motion.div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden"
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
              <div className="p-4 bg-[#A09E9E]">
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

export default Plumbing