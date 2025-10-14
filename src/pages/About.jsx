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
    About Me
  </h2>

  {/* Intro Paragraph */}
  <p className="text-[#a09e9e] text-center md:text-left text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-8 px-2">
    Welcome to <span className="font-semibold">B1 Handyman</span>, your reliable partner for all home maintenance and improvement projects. With years of expertise, our dedicated team delivers exceptional workmanship that surpasses expectations.
  </p>

  {/* Two Columns: Image + New Content */}
  <div className="flex flex-col md:flex-row gap-10 items-start mt-10">
    {/* Left Image */}
    <div className="w-full md:w-1/2">
      <img
        src={images.painting1}
        alt="Handyman at work"
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
      />
    </div>

    {/* Right Content: Replaced with user's text */}
    <div className="w-full md:w-1/2 text-[#929092] space-y-6">
      {/* Who I Work With */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#A55018]">Who I Work With</h3>
        <p className="text-lg leading-relaxed mb-2">
          I provide services tailored to:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 mb-4">
          <li>Private households – from small repairs to larger renovations.</li>
          <li>Children’s residential care homes (regulated by Ofsted) – urgent response and compliance-focused maintenance.</li>
          <li>Adult care homes (regulated by the CQC) – reliable maintenance support to help meet regulatory standards and keep residents safe and comfortable.</li>
          <li>Businesses &amp; offices – routine maintenance to one-off jobs, delivered with minimal disruption.</li>
        </ul>
      </div>

      {/* Compliance & Professionalism */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#A55018]">Compliance &amp; Professionalism</h3>
        <p className="text-lg leading-relaxed mb-2">
          I understand that regulated care settings require the highest standards of trust and safety. That’s why I:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 mb-4">
          <li>Work with full respect for health &amp; safety requirements.</li>
          <li>Am mindful of safeguarding responsibilities when working in environments with vulnerable adults or children.</li>
          <li>Hold an up-to-date DBS check for added reassurance.</li>
          <li>Provide a professional, discreet, and respectful service at all times.</li>
        </ul>
      </div>

      {/* Why Choose Me */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#A55018]">Why Choose Me?</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>Free written quotations with a fixed price—no hidden costs.</li>
          <li>Respectful, reliable, and punctual—I treat every home or workplace with care.</li>
          <li>Clear communication—I’ll always keep you informed and turn up at the agreed time.</li>
          <li>Flexible approach—if your job isn’t listed, just ask.</li>
        </ul>
      </div>

      <div>
        <Link
          to="/contact-us"
          className="inline-block mt-4 text-[#c05208] font-semibold hover:text-[#e97020] underline transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>

  {/* Map */}
  <div className="mt-10 w-full max-w-6xl mx-auto ">
    <MapEmbed latLng="28.6139,77.2090" zoom={5} height={420} />
  </div>
</div>

</section>


  );
}
