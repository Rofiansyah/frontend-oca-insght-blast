import React, { useState } from 'react';

const Content = () => {
  const [isPrimeTimeChecked, setIsPrimeTimeChecked] = useState(false);
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsPrimeTimeChecked(isChecked);
    if (isChecked) {
      setTime('12:30');
    } else {
      setTime('');
    }
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (!message || !time) {
      alert('Silakan isi kolom pesan dan waktu terlebih dahulu!');
    } else {
      alert('Pesan berhasil dikirim!');
    }
  };

  return (
    <main className="flex-1 bg-gray-100 p-6 font-sans">
      {/* Header dengan Logo dan Teks */}
      <div className="flex items-center mb-4">
        <img src="/assets/speaker.png" alt="Speaker Logo" className="h-8 w-8 mr-6 ml-4 animate-bounce" />
        <h2 className="text-2xl font-semibold text-gray-800">WhatsApp Broadcast Scheduler</h2>
      </div>

      {/* Banner Card dengan Gradient Border Merah dan Hover Effect */}
      <div className="relative p-[2px] bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer mb-6">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">PRIME TIME</h3>
          <p className="text-gray-600 mb-4">
            Gunakan Prime Time untuk memastikan pesan Anda dibaca cepat dan efektif. Jangan lewatkan momen emas ini!
          </p>

          {/* Jam Dummy dengan Efek "Deep" */}
          <div className="flex flex-col items-center mt-4">
            <div className="text-4xl font-bold text-red-600 border-2 border-red-600 rounded-full p-4 animate-pulse shadow-lg transform hover:scale-110 transition duration-300">
              12:30
            </div>
            <p className="mt-2 text-gray-500 text-sm italic">Average read: 30 seconds</p>
          </div>
        </div>
      </div>

      {/* Card Baru Tanpa Gradient Border */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <h3 className="text-xl font-bold text-gray-800 mb-4">BLAST YOUR MESSAGE</h3>

        {/* Baris 1: Checkbox Prime Time dan Input Jam */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <label className="flex items-center text-gray-700 mb-2 sm:mb-0">
            <input
              type="checkbox"
              className="mr-2"
              checked={isPrimeTimeChecked}
              onChange={handleCheckboxChange}
            />
            Pilih Prime Time
          </label>
          <input
            type="time"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Isi Jam Manual"
            value={time}
            onChange={handleTimeChange}
            disabled={isPrimeTimeChecked}
          />
        </div>

        {/* Baris 2: Kolom Pesan */}
        <div className="mb-4">
          <textarea
            className="w-full h-24 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Ketik pesan Anda di sini..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>

        {/* Baris 3: Tombol Send */}
        <div className="flex justify-end">
          <button
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300"
            onClick={handleSendClick}
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
};

export default Content;
