import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex items-center justify-between drop-shadow-md">
      {/* Logo di pojok kiri */}
      <div className="flex items-center">
        <img 
          src="public/assets/OCAlogo.png" 
          alt="Logo 1"
          className="h-10 w-50 mr-2"
        />
      </div>

      {/* Logo di pojok kanan */}
      <div className="flex items-center space-x-4">
        <img src="public/assets/u_bell.png" alt="Logo 2" className="h-8 w-8" />
        <img src="public/assets/u_question-circle.png" alt="Logo 3" className="h-6 w-6" />
        <img src="public/assets/photo.png" alt="Logo 4" className="h-10 w-10" />
      </div>
    </header>
  );
}

export default Header;
