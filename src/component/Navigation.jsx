import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 sticky top-0 z-50 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          <a href="/">MERN STACK</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Icon for menu (can be an SVG or hamburger icon) */}
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex items-center space-x-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li><a href="#" className="text-white hover:text-blue-200 block px-2 py-1">Home</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 block px-2 py-1">About</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 block px-2 py-1">Services</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 block px-2 py-1">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

