import React from 'react';

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-[#FAFBFC] text-black h-screen p-6 shadow-lg font-sans">
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
    </aside>
  );
};

export default Sidebar;
