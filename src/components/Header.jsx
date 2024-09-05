import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex items-center justify-between drop-shadow-md font-sans">
      {/* Logo di pojok kiri */}
      <div className="flex items-center">
        <img 
          src="/assets/OCAlogo.png" 
          alt="Logo 1"
          className="h-10 w-auto mr-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Ikon di pojok kanan */}
      <div className="flex items-center space-x-6">
        <img 
          src="/assets/u_bell.png" 
          alt="Bell Icon" 
          className="h-8 w-8 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
        />
        <img 
          src="/assets/u_question-circle.png" 
          alt="Help Icon" 
          className="h-6 w-6 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
        />
        <img 
          src="/assets/photo.png" 
          alt="User Avatar" 
          className="h-10 w-10 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer drop-shadow-md"
        />
      </div>
    </header>
  );
}

export default Header;
