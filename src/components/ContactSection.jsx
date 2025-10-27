import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="pt-28 pb-20 bg-gradient-to-r from-[#EAE6FF] to-[#D6E4FF]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kiri: Info Kontak */}
        <div>
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-6">
            Interested in working together? Let's connect and create something amazing!
          </p>

          <div className="space-y-4 text-[#6C63FF] font-medium">
            <div className="flex items-center gap-3">
             <span>📧</span>
             <a href="mailto:andynaauliaa@gmail.com">andynaauliaa@gmail.com</a>
          </div>
            <div className="flex items-center gap-3">
              <span>📞</span>
              <a href="tel:+6287879195912">+62 878-7919-5912</a>
            </div>
          </div>
        </div>

        {/* Kanan: Form Kontak */}
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#6C63FF] text-white px-6 py-2 rounded hover:bg-[#4C5BFE] transition font-medium"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;