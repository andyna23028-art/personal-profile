import React from 'react';
import dashboardImg from '../assets/images/WebApp.png';
import mobileImg from '../assets/images/MobileApp.png';
import motionImg from '../assets/images/MotionGraphic.jpg';

const projects = [
  {
    category: "UI Design",
    title: "Dashboard Web App",
    tags: "UI/UX, Frontend",
    imgSrc: dashboardImg,
  },
  {
    category: "Mobile App",
    title: "Mobile App Landing",
    tags: "Design, Branding",
    imgSrc: mobileImg,
  },
  {
    category: "Motion",
    title: "Motion Graphic",
    tags: "Animation, Branding",
    imgSrc: motionImg,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#1F2937] mb-10 flex items-center justify-center gap-2 text-center">
          📁 Portfolio
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-gray-100 text-sm text-[#1F2937] font-medium px-3 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-[#1F2937]">{project.title}</h3>
                <p className="text-[#6B7280] mt-1">{project.tags}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dribbble Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://dribbble.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6C63FF] text-white px-6 py-2 rounded hover:bg-[#4C5BFE] transition font-medium"
          >
            👁️‍🗨️ More on Dribbble
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;