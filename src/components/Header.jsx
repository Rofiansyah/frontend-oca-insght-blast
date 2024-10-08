import React, { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleWhatsApp = () => {
    setIsWhatsAppOpen(!isWhatsAppOpen);
  };

  const items = [
    'Broadcast',
    'Broadcast Scheduler',
    'WhatsApp Usages',
    'Generate Report',
    'Sessions Report',
    'Template'
  ];

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

      {/* Background Overlay with Fade Effect */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 transition-opacity duration-300 opacity-75 z-40"
          onClick={toggleSidebar} // Close the sidebar when clicking on the background
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-64 bg-[#FAFBFC] text-black h-full p-6 shadow-lg font-sans relative">
          {/* Close Button with Rotation on Hover */}
          <button
            onClick={toggleSidebar}
            className="text-3xl mb-4 transition-transform duration-300 ease-in-out transform hover:rotate-180"
          >
            ×
          </button>
          <nav>
          <ul>
          <li className="mb-4">
            <button
              onClick={toggleWhatsApp}
              className="hover:bg-gray-200 p-3 flex items-center justify-between w-full rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm"
            >
              <div className="flex items-center">
                <img src="/assets/Vector.png" alt="WhatsApp Logo" className="h-6 w-6 mr-3" />
                <span className="font-semibold text-lg">WhatsApp</span>
              </div>
              <span>{isWhatsAppOpen ? '▲' : '▼'}</span> {/* Arrow indicator */}
            </button>
          </li>

          {isWhatsAppOpen && (
            <ul className="ml-4 space-y-2 transition-all duration-300 ease-in-out transform">
              {items.map((text, index) => (
                <li key={index} className="flex items-center">
                  {/* Render the vertical line only for 'Broadcast Scheduler' and set it to red */}
                  {text === 'Broadcast Scheduler' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-1 mr-2 text-red-500"
                      viewBox="0 0 2 20"
                    >
                      <rect width="2" height="20" fill="currentColor" />
                    </svg>
                  )}
                  <a
                    href="#"
                    className={`p-2 block rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm ${
                      text === 'Broadcast Scheduler'
                        ? 'bg-gray-100 text-black font-bold'
                        : 'hover:bg-gray-200'
                    }`}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
