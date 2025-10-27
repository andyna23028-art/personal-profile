import React from 'react';
import profileImg from '../assets/images/andyna.jpg'; // ganti sesuai path gambar kamu

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Foto Profil */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Andyna Aulia"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Deskripsi */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#6C63FF] mb-4 font-poppins">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hi! I'm Andyna, a passionate designer and frontend developer based in Indonesia. With a background in visual design and a love for coding, I focus on creating modern websites and apps that are not only visually appealing but also easy to use. I enjoy bringing ideas to life through design, interactivity, and clean code.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
            {["UI/UX Design", "Web Development", "Branding", "Motion Graphics"].map((skill, index) => (
              <span
                key={index}
                className="bg-[#EAE6FF] text-[#6C63FF] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                ✅ {skill}
              </span>
            ))}
          </div>

          {/* Tombol Connect */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-5 py-2 rounded hover:bg-[#4C5BFE] transition font-medium"
          >
            ✈️ Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;