// ContactUs.jsx
import React, { useState, useEffect} from "react";
import images from "../assets/images";

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
    <div className="bg-[#404040] text-white min-h-screen flex items-center">
      <div className="container w-6xl m-auto">
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12">
  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#A55018] mb-4">
    Get in Touch
  </h2>

  {/* Paragraph */}
  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#919191]">
    Whether you need a quick repair, a full renovation, or expert advice, we’re here to help.  
    Reach out to HandyPro Experts today — we’ll answer your questions, provide a free estimate, and ensure your home gets the care it deserves.  
    Your comfort and satisfaction are our top priorities.
  </p>
</div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          
       <div className="bg-[#404040] py-12 px-4 sm:px-6 lg:px-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

    {/* Left Side - Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#A55018] mb-6">
        Contact Us
      </h2>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-left">
        We’d love to hear from you! Whether you have a question about our services, 
        need a free quote, or want to discuss a project, our team is ready to assist you. 
        Reach out to us via email, phone, or by filling out the form below. 
        Your satisfaction is our top priority.
      </p>

      <p className="mt-6 text-gray-400 text-left sm:text-base">
        <span className="block mb-2">
          <strong className="text-[#A55018]">Email:</strong> <span className="text-white">info@example.com</span>
        </span>
        <span className="block mb-2">
          <strong className="text-[#A55018]">Phone:</strong> <span className="text-white">+91 123 456 7890</span>
        </span>
        <span className="block">
          <strong className="text-[#A55018]">Address:</strong> <span className="text-white">123 Main Street, City, Country</span>
        </span>
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="md:w-1/2 w-full">
      <img
        src={images.contactusImg}
        alt="Contact Us"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>

  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contactus;
