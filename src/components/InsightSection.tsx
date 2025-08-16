import React from "react";

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h3m4 0V7a2 2 0 00-2-2h-7.5a2 2 0 00-2 2v2m0 0H5a2 2 0 00-2 2v7a2 2 0 002 2h7.5a2 2 0 002-2v-2" /></svg>
    ),
    title: "Real-Time Collaboration",
    desc: "Work together seamlessly with live code sharing and instant feedback during interviews."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h12a2 2 0 012 2v7c0 2.21-3.582 4-8 4z" /></svg>
    ),
    title: "Secure & Private",
    desc: "Your data and interviews are protected with enterprise-grade security and privacy controls."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1a4 4 0 00-4 4v1a4 4 0 004 4h1a4 4 0 004-4v-1a4 4 0 00-4-4z" /></svg>
    ),
    title: "Effortless Scheduling",
    desc: "Easily set up, manage, and join interviews with a streamlined scheduling experience."
  }
];

const InsightSection = () => (
  <section className="w-full py-16 bg-gray-900 flex flex-col items-center justify-center">
    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Key Features</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-6">
      {features.map((f, i) => (
        <div key={i} className="bg-gray-800 rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-emerald-600/40 transition">
          <div className="mb-4">{f.icon}</div>
          <h4 className="text-xl font-semibold text-emerald-300 mb-2 text-center">{f.title}</h4>
          <p className="text-white/80 text-center">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default InsightSection; 