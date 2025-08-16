import React from "react";

const FooterSection = () => (
  <footer className="w-full border-t-4 border-green-500 bg-gray-900 py-6 mt-16 flex flex-col items-center">
    <p className="text-white text-sm">&copy; {new Date().getFullYear()} CodeSync. All rights reserved.</p>
  </footer>
);

export default FooterSection; 