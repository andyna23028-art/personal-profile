import React from 'react';
import profileImg from '../assets/images/andyna.jpg'; // ganti dengan path gambar kamu

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-r from-[#EAE6FF] to-[#D6E4FF]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-3 font-poppins">
            Hello, I'm Andyna Aulia Azzahra
          </h2>
          <p className="text-2xl text-[#6C63FF] font-semibold mb-4">
            Creative Designer & Frontend Developer
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I design and develop experiences that make people's lives simpler through Web and Mobile apps.
            I work with Figma, HTML5, CSS3, JavaScript, and Flutter.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#portfolio"
              className="bg-[#6C63FF] text-white px-5 py-2 rounded hover:bg-[#4C5BFE] transition font-medium"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="border border-[#6C63FF] text-[#6C63FF] px-5 py-2 rounded hover:bg-[#F3F4F6] transition font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Andyna Aulia"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;