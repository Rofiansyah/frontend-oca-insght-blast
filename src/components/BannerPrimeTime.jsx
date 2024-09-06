import React from 'react';

const BannerPrimeTime = () => {
  return (
    <div className="relative p-[2px] bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer mb-6">
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-2">PRIME TIME</h3>
        <p className="text-white mb-4">
        Use Prime Time to ensure your messages are read quickly and effectively. Don't miss this golden moment!
        </p>

        {/* Dummy Clock with "Deep" Effect */}
        <div className="flex flex-col items-center mt-4 relative">
          <div className="clock-wrapper relative flex items-center">
            <div className="arrow-left mr-4 animate-slide-left hover:animate-glow"></div>
            <div className="text-4xl font-bold text-red-600 border-2 border-red-600 rounded-full p-4 bg-white animate-pulse shadow-lg transform hover:scale-110 transition duration-300">
              12:30
            </div>
            <div className="arrow-right ml-4 animate-slide-right hover:animate-glow"></div>
          </div>
          <p className="mt-2 text-gray-300 text-sm italic">Average read: 30 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default BannerPrimeTime;
