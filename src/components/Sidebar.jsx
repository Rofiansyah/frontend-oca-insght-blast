import React, { useState } from 'react';

const Sidebar = () => {
  // State untuk mengontrol tampilan sub-navbar
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  // Fungsi untuk toggle sub-navbar
  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };

  return (
    <aside className="w-64 bg-[#FAFBFC] text-black h-screen p-4 font-sans">
      <nav>
        <ul>
          {/* Menu item utama dengan logo */}
          <li className="mb-2">
            <button
              onClick={toggleSubNav}
              className="hover:bg-gray-200 p-2 flex items-center justify-between w-full rounded"
            >
              <div className="flex items-center">
                <img src="src/assets/Vector.png" alt="WhatsApp Logo" className="h-6 w-6 mr-2" />
                WhatsApp
              </div>
              {/* Icon panah */}
              <span className="text-lg">
                {isSubNavOpen ? '▲' : '▼'}
              </span>
            </button>
          </li>

          {/* Sub-navbar yang dapat di-expand/collapse */}
          {isSubNavOpen && (
            <ul className="ml-8 mb-2">
              <li className="mb-2">
                <a href="#" className="hover:bg-gray-200 p-2 block rounded">Broadcast Scheduler</a>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
