// ContactUs.jsx
import React, { useState, useEffect } from "react";
import images from "../assets/images";
import MapEmbed from "../components/Map";

const Contactus = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
    <>
      <section className="bg-[#404040] text-white">
        <div className="px-4 sm:px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

            {/* Left Side - Text (centered on small, left on md+) */}
            <div className="bg-[#404040]  mx-auto text-white flex justify-center items-center px-4">
              <div className="  mx-auto max-w-3xl text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#A55018] mb-6">
                  Get In Touch
                </h2>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  Whether you need a quick repair, a full renovation, or expert advice, we’re here to help.
                  Reach out to HandyPro Experts today — we’ll answer your questions, provide a free estimate,
                  and ensure your home gets the care it deserves. Your comfort and satisfaction are our top priorities.
                </p>

                <div className="mt-8 text-gray-400 text-center sm:text-base leading-relaxed">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                      <strong className="text-[#A55018]">Email:</strong>
                      <a href="mailto:info@example.com" className="text-white hover:underline">
                        info@example.com
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <strong className="text-[#A55018]">Phone:</strong>
                      <a href="tel:+911234567890" className="text-white hover:underline">
                        +91 123 456 7890
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <strong className="text-[#A55018]">Address:</strong>
                      <span className="text-white">123 Main Street, City, Country</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>


      <div className="bg-[#404040] text-white py-12 px-4 sm:px-6 lg:px-12 flex justify-center">
        <div className="w-full max-w-6xl">
          <MapEmbed />
        </div>
      </div>

    </>
  );
};

export default Contactus;
