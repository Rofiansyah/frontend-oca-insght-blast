import React, { useState } from 'react';

const Sidebar = () => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

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
    <aside className="hidden md:block w-64 bg-[#FAFBFC] text-black h-screen p-6 shadow-lg font-sans">
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
    </aside>
  );
};

export default Sidebar;
