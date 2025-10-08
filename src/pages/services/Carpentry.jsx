import React from 'react'
import { carpentryData} from './serviceData'


const Carpentry = () => {
  return (
  <>
    <div className='bg-[#2b2a2a] w-[100%]'>
  <section className="py-16 md:py-24 bg-[#646464] font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-3xl font-bold tracking-wider uppercase text-amber-500 mb-2">
          WHY CHOOSE US?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Your Trusted Carpentry Experts
        </h2>
        <p className="max-w-3xl mx-auto text-white text-lg">
          From custom furniture to full-scale carpentry projects, we deliver high-quality craftsmanship
          tailored to your needs — blending precision, creativity, and reliability in every job.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-12 gap-6 auto-rows-fr">
        {carpentryData.map((card) => (
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
              <p className="border-t text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

  </>
  )
}

export default Carpentry