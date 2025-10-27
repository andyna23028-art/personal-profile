import React from 'react';

const skills = [
  { title: "UI/UX Design", tools: "Figma, Adobe XD, Sketch", icon: "🎨", bg: "bg-[#F3E8FF]" },
  { title: "Frontend Dev", tools: "React, Vue, Tailwind", icon: "👨🏻‍💻", bg: "bg-[#E0F2FE]" },
  { title: "Branding", tools: "Logo, Identity, Print", icon: "🏷️", bg: "bg-[#FEF9C3]" },
  { title: "Motion Graphic", tools: "After Effects, Lottie", icon: "🎬", bg: "bg-[#DBEAFE]" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1F2937] mb-8 flex items-center gap-2 justify-center">
          💡 My Skills
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg text-center ${skill.bg}`}>
              <span className="text-4xl">{skill.icon}</span>
              <h3 className="text-xl font-semibold text-[#1F2937] mt-4">{skill.title}</h3>
              <p className="text-[#6B7280] mt-2">{skill.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;