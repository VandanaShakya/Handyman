import React from 'react'
import { flatpackData } from './serviceData'


const Flatpacking = () => {
  return (
    <div><div className='bg-[#2b2a2a] w-[100%]'>
  <section className="py-16 md:py-24 bg-[#646464] font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-3xl font-bold tracking-wider uppercase text-amber-500 mb-2">
          WHY CHOOSE US?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Professional Flat-Pack Assembly Services
        </h2>
        <p className="max-w-3xl mx-auto text-white text-lg">
          Our handyman flat-pack assembly services take the hassle out of building your furniture.  
          From wardrobes and desks to shelves and outdoor sets, we assemble your items safely, correctly,  
          and efficiently — saving you time and ensuring everything fits perfectly.  
          Sit back and relax while we handle the tools, instructions, and finishing touches.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flatpackData.map((card) => (
          <div
            key={card.id}
            className="rounded-xl shadow-lg overflow-hidden relative h-96 flex flex-col justify-end text-white"
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
              <p className="border-t text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
</div>
  )
}

export default Flatpacking