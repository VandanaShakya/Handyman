// src/pages/AboutUs.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import MapEmbed from "../components/Map";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full flex flex-col justify-center items-center h-screen bg-[#404040]">
        <div className="w-12 h-12 border-4 border-t-[#A55018] border-gray-300 rounded-full animate-spin"></div>
        <p className="mt-4 text-[#A55018] text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return (
 <section className="bg-[#404040] py-12 px-4 sm:px-6 lg:px-12">
  <div className="max-w-7xl mx-auto space-y-10">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-[#A55018] mb-6">
      About Us
    </h2>

    {/* Intro Paragraph */}
    <p className="text-[#a09e9e] text-center md:text-left text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-8 px-2">
      Welcome to <span className="font-semibold">HandyPro Experts</span>, your reliable partner for all home maintenance and improvement projects.  
      With years of expertise, our dedicated team delivers exceptional workmanship that surpasses expectations.
    </p>

  

    {/* Two Columns: Image + Original Text */}
    <div className="flex flex-col md:flex-row gap-10 items-start mt-10">

      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src={images.painting1}
          alt="Handyman at work"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Content: Original Trusted Repair Pros */}
      <div className="w-full md:w-1/2 text-[#a09e9e] space-y-6">
       <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#A55018]">
   Why choose us ?
  </h2>

  <p className="text-lg leading-relaxed">
    Welcome to <span className="font-semibold">HandyPro Services</span>, your dependable partner for all home maintenance, repair, and improvement projects. With years of experience, our skilled team delivers exceptional workmanship and reliable solutions for every task. Whether it’s fixing leaks, repairing fixtures, installing flooring, painting interiors, or handling full-scale renovations, we provide a complete range of handyman services to keep your home safe, functional, and beautiful.
  </p>

 

  <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
    <li>Work carried out safely and efficiently, respecting health & safety standards.</li>
    <li>Full attention to safeguarding responsibilities, especially in environments with vulnerable adults or children.</li>
    <li>Clear communication and transparency—keeping you informed at every step.</li>
    <li>Flexible and professional service tailored to your specific needs.</li>
  </ul>


        <Link
          to="/contact-us"
          className="inline-block mt-4 text-[#c05208] font-semibold hover:text-[#e97020] underline transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* Map */}
    <div className="mt-10 w-full max-w-6xl mx-auto">
      <MapEmbed latLng="28.6139,77.2090" zoom={5} height={420} />
    </div>
  </div>
</section>


  );
}
