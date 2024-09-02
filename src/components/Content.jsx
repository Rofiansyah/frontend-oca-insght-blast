import React, { useState } from 'react';

const Content = () => {
  // State untuk mengontrol apakah checkbox dipilih atau tidak
  const [isPrimeTimeChecked, setIsPrimeTimeChecked] = useState(false);
  const [time, setTime] = useState(''); // State untuk menyimpan waktu
  const [message, setMessage] = useState(''); // State untuk menyimpan pesan

  // Fungsi untuk mengubah state checkbox
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsPrimeTimeChecked(isChecked);
    if (isChecked) {
      setTime('12:30'); // Atur waktu "Prime Time" ketika checkbox aktif
    } else {
      setTime(''); // Kosongkan waktu ketika checkbox tidak aktif
    }
  };

  // Fungsi untuk mengubah waktu secara manual
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  // Fungsi untuk menangani perubahan pesan
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Fungsi untuk menangani klik tombol send
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
        {/* Logo di samping kiri dengan jarak ke kiri */}
        <img src="public/assets/speaker.png" alt="Speaker Logo" className="h-8 w-8 mr-6 ml-4" />
        <h2 className="text-2xl font-semibold">WhatsApp Broadcast Scheduler</h2>
      </div>

      {/* Banner Card dengan Gradient Border Merah dan Hover Effect */}
      <div className="relative p-[2px] bg-gradient-to-r from-red-500 to-red-700 rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mb-6">
        {/* Inner card with white background */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">PRIME TIME</h3>
          <p className="text-gray-600 mb-4">
            Gunakan Prime Time untuk memastikan pesan Anda dibaca cepat dan efektif. Jangan lewatkan momen emas ini!
          </p>

          {/* Jam Dummy dengan Frame Rounded, Highlight Merah, Ukuran Teks Besar, dan Efek "Deep" */}
          <div className="flex justify-center mt-4">
            <div className="text-3xl font-bold text-red-600 border-2 border-red-600 rounded-full p-3 animate-pulse shadow-lg">
              12:30
            </div>
          </div>
        </div>
      </div>

      {/* Card Baru Tanpa Gradient Border */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">BLAST YOUR MESSAGE</h3>

        {/* Baris 1: Checkbox Prime Time dan Input Jam */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
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
            className="border border-gray-300 rounded p-2"
            placeholder="Isi Jam Manual"
            value={time}
            onChange={handleTimeChange}
            disabled={isPrimeTimeChecked} // Nonaktifkan input waktu jika checkbox aktif
          />
        </div>

        {/* Baris 2: Kolom Massage */}
        <div className="mb-4">
          <textarea
            className="w-full h-24 border border-gray-300 rounded p-2"
            placeholder="Ketik pesan Anda di sini..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>

        {/* Baris 3: Tombol Send */}
        <div className="flex justify-end">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
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
