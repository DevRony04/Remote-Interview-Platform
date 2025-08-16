import React from "react";

const HeroSection = () => (
  <section className="relative w-full min-h-[450px] md:min-h-[600px] flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-2xl my-12 shadow-2xl bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-800 animate-gradient-slow">
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center md:items-start justify-center px-6 py-16 md:py-24 w-full md:w-1/2">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-center md:text-left text-white tracking-tight">
        Empower Your Interviews
      </h2>
      <p className="text-xl md:text-2xl mb-6 text-center md:text-left max-w-2xl text-white/90 font-medium">
        Seamlessly schedule, join, and manage interviews with real-time collaboration and code sharing.
      </p>
      <p className="text-lg md:text-xl mb-10 text-center md:text-left max-w-xl text-white/70">
        Elevate your hiring process with a platform designed for efficiency, clarity, and success.
      </p>
      <button className="px-10 py-4 rounded-full bg-emerald-500 text-white font-bold text-xl shadow-lg hover:bg-emerald-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300">
        Get Started
      </button>
    </div>
    {/* SVG Illustration */}
    <div className="hidden md:flex items-center justify-center w-1/2 h-full relative z-10">
      <svg className="w-80 h-80 animate-float-slow" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="120" fill="#10b981" fillOpacity="0.15" />
        <rect x="60" y="100" width="136" height="56" rx="16" fill="#10b981" fillOpacity="0.3" />
        <rect x="80" y="120" width="96" height="16" rx="8" fill="#10b981" fillOpacity="0.7" />
        <rect x="100" y="144" width="56" height="8" rx="4" fill="#10b981" fillOpacity="0.7" />
        <rect x="120" y="80" width="16" height="40" rx="8" fill="#10b981" fillOpacity="0.7" />
      </svg>
    </div>
    {/* Animated Gradient Keyframes */}
    <style jsx>{`
      .animate-gradient-slow {
        background-size: 200% 200%;
        animation: gradientMove 8s ease-in-out infinite;
      }
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-float-slow {
        animation: floatSlow 6s ease-in-out infinite;
      }
      @keyframes floatSlow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-16px); }
      }
    `}</style>
  </section>
);

export default HeroSection; 