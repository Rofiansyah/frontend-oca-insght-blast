import React, { useState } from 'react';

const Sidebar = () => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };

  return (
    <aside className="w-64 bg-[#FAFBFC] text-black h-screen p-6 shadow-lg font-sans">
      <nav>
        <ul>
          <li className="mb-4">
            <button
              onClick={toggleSubNav}
              className="hover:bg-gray-200 p-3 flex items-center justify-between w-full rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm"
            >
              <div className="flex items-center">
                <img src="/assets/Vector.png" alt="WhatsApp Logo" className="h-6 w-6 mr-3" />
                <span className="font-semibold text-lg">WhatsApp</span>
              </div>
              <span className={`text-lg transform transition-transform duration-300 ${isSubNavOpen ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </button>
          </li>

          {isSubNavOpen && (
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
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
