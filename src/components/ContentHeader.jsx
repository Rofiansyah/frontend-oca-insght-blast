import React from 'react';

const ContentHeader = () => {
  return (
    <div className="flex items-center mb-4">
        <img src="/assets/speaker.png" alt="Speaker Logo" className="h-8 w-8 mr-6 ml-4 animate-bounce" />
        <h2 className="text-2xl font-semibold text-gray-800">WhatsApp Broadcast Scheduler</h2>
    </div>
  );
};

export default ContentHeader;
