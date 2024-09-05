import React, { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white text-black p-4 flex items-center justify-between drop-shadow-md font-sans">
        {/* Logo di pojok kiri */}
        <div className="flex items-center">
          {/* Menu Button for Mobile */}
          <button 
            className="md:hidden text-2xl"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <img 
            src="/assets/OCAlogo.png" 
            alt="Logo 1"
            className="h-10 w-auto ml-4 mr-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Ikon di pojok kanan */}
        <div className="flex items-center space-x-4">
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

      {/* Sidebar Drawer */}
      {isSidebarOpen && (
        <aside className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="w-64 bg-[#FAFBFC] text-black h-full p-6 shadow-lg font-sans">
            <button
              onClick={toggleSidebar}
              className="text-3xl mb-4"
            >
              ×
            </button>
            <nav>
              <ul>
                <li className="mb-4">
                  <button
                    className="hover:bg-gray-200 p-3 flex items-center justify-between w-full rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm"
                  >
                    <div className="flex items-center">
                      <img src="/assets/Vector.png" alt="WhatsApp Logo" className="h-6 w-6 mr-3" />
                      <span className="font-semibold text-lg">WhatsApp</span>
                    </div>
                  </button>
                </li>

                <ul className="ml-4 space-y-2 transition-all duration-300 ease-in-out transform">
                  <li>
                    <a
                      href="#"
                      className="hover:bg-gray-200 p-2 block rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm"
                    >
                      Broadcast Scheduler
                    </a>
                  </li>
                </ul>
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
}

export default Header;
