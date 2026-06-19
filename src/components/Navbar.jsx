import React from "react";

const Navbar = () => {
  
  return (
    <nav className="flex fixed gap-50  ml-30 items-center justify-around px-6 py-4 bg-[#060003] blur[2px] z-10 shadow-sm">
      <span className="flex items-center">
        <img src="/pixels/imgi_1_logo.svg" alt="Logo" className="h-8 w-auto" />
      </span>

      <ul className="hidden md:flex items-center gap-8 text-white font-medium">
        <li className="cursor-pointer hover:text-gray-200 transition">Home</li>
        <li className="cursor-pointer hover:text-gray-200 transition">Features</li>
        <li className="cursor-pointer hover:text-gray-200 transition">
          Testimonials
        </li>
        <li className="cursor-pointer hover:text-gray-200 transition">Pricing</li>
      </ul>

      <button className="bg-[#d30565] text-white px-6 py-2 rounded-[25px] font-medium hover:bg-[#C6005C]transition">
        Start free trial
      </button>
    </nav>
  );
};

export default Navbar;
