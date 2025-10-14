// Myblog.jsx
import React, { useState, useEffect } from "react";
import { unitsData, serviceDetails } from "./mainPagesData";


const Myblog = () => {
  const [selectedSlug, setSelectedSlug] = useState(null);

  const toggle = (slug) => {
    setSelectedSlug((prev) => (prev === slug ? null : slug));
  };


  // loading //
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) 

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
 <div className="bg-[#404040] py-12 sm:py-16">
  <div className="max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
    {/* Heading Section */}
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#A55018] mb-4">
        B1 Handyman Blog
      </h2>
      
    </div>

    {/* Units */}
    {unitsData.map((unit) => {
      const detail = serviceDetails.find((d) => d.slug === unit.slug);
      const isOpen = selectedSlug === unit.slug;

      return (
        <div
          key={unit.slug}
          id={`unit-${unit.slug}`}
          className="bg-[#636363] p-5 sm:p-6 md:p-8 shadow-lg rounded-md flex flex-col md:flex-row gap-6"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 flex items-center justify-center overflow-hidden rounded-md">
              <img
                src={unit.image}
                alt={unit.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#A55018] mb-3">
                {unit.title}
              </h2>
              <p className="text-white mb-4 leading-relaxed text-sm sm:text-base">
                {unit.description}
              </p>

              <p className="text-white font-bold uppercase tracking-wider mb-3 text-sm">
                PERFECT FOR
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                {unit.perfectFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-white text-xs sm:text-sm md:text-base bg-[rgba(255,255,255,0.03)] px-2 py-1 rounded"
                  >
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Read More button */}
            <div className="mt-4 md:mt-6">
              <button
                onClick={() => toggle(unit.slug)}
                className="text-[#A55018] font-semibold underline hover:text-[#f88d45] transition duration-300 text-left cursor-pointer text-sm sm:text-base"
                aria-expanded={isOpen}
                aria-controls={`detail-${unit.slug}`}
              >
                {isOpen ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Inline expanded detail */}
          {isOpen && detail && (
            <div
              id={`detail-${unit.slug}`}
              className="mt-6 border-t pt-6 transition-all duration-300 w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                {detail.heroTitle}
              </h3>

              <p className="text-white mb-4 text-sm sm:text-base leading-relaxed">
                {detail.longDescription}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-white">Highlights</h4>
                <ul className="list-disc pl-6 text-white text-sm sm:text-base">
                  {detail.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-white">Checklist</h4>
                <ul className="list-disc pl-6 text-white text-sm sm:text-base">
                  {detail.checklist.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {detail.gallery && detail.gallery.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                  {detail.gallery.map((g, i) => (
                    <div
                      key={i}
                      className="h-28 sm:h-32 bg-gray-100 overflow-hidden rounded-md flex items-center justify-center"
                    >
                      <img
                        src={g}
                        alt={`${unit.slug}-gallery-${i}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4">
                <button
                  onClick={() => setSelectedSlug(null)}
                  className="px-4 py-2 rounded-md border border-[#A55018] text-[#A55018] hover:bg-[#A55018] hover:text-white transition text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

  );
};

export default Myblog;
