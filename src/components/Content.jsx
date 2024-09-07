import React, { useState } from 'react';
import './Content.css';
import BannerPrimeTime from './BannerPrimeTime';
import ContentHeader from './ContentHeader';
import MessageContent from './MessageContent';
import { FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';

const Content = () => {
  const [isPrimeTimeChecked, setIsPrimeTimeChecked] = useState(false);
  const [isTodayChecked, setIsTodayChecked] = useState(false);
  const [broadcastName, setBroadcastName] = useState('');
  const [broadcastFormat, setBroadcastFormat] = useState('');
  const [recipient, setRecipient] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  const [touched, setTouched] = useState({
    broadcastName: false,
    broadcastFormat: false,
    recipient: false,
    templateName: false,
    message: false,
    date: false,
    selectedTime: false
  });

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsPrimeTimeChecked(isChecked);
    if (isChecked) {
      setSelectedTime('12:30'); // Replace with prime time from backend if needed
    } else {
      setSelectedTime('');
    }
  };

  const handleTodayCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsTodayChecked(isChecked);
    if (isChecked) {
      const today = new Date().toISOString().split('T')[0];
      setDate(today);
    } else {
      setDate('');
    }
  };

  const handleTimeChange = (event) => {
    if (!isPrimeTimeChecked) {
      setSelectedTime(event.target.value);
    }
  };

  const handleBroadcastNameChange = (event) => {
    setBroadcastName(event.target.value);
  };

  const handleBroadcastFormatChange = (event) => {
    setBroadcastFormat(event.target.value);
    if (event.target.value === '') {
      setTemplateName('');
    }
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleTemplateNameChange = (event) => {
    const selectedTemplate = event.target.value;
    setTemplateName(selectedTemplate);

    if (selectedTemplate) {
      setMessage(MessageContent());
    } else {
      setMessage('');
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSendClick = async () => {
    setTouched({
      broadcastName: true,
      broadcastFormat: true,
      recipient: true,
      templateName: true,
      message: true,
      date: true,
      selectedTime: true
    });

    if (!date || !selectedTime || !message || !templateName || !broadcastFormat || !broadcastName) {
      alert('Please fill out all required fields!');
      return;
    }

    const requestBody = {
      message: message,
      scheduledDate: date,
      scheduledTime: selectedTime,
    };

    try {
      const response = await axios.post('http://localhost:4000/blast/blast', requestBody);
      if (response.status === 200) {
        alert('Message successfully sent!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message!');
    }
  };

  return (
    <main className="flex-1 bg-gray-100 p-6 font-sans">
      <ContentHeader />

      <BannerPrimeTime />

      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">BLAST YOUR MESSAGE</h3>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex flex-col mb-4 sm:mb-0 sm:mr-4 w-full sm:w-1/2">
            <label className="text-gray-700 mb-2">
              Broadcast Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={`border rounded p-2 w-full focus:outline-none focus:ring-2 ${
                (!broadcastName && touched.broadcastName) ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your broadcast name"
              value={broadcastName}
              onChange={handleBroadcastNameChange}
              onBlur={() => handleBlur('broadcastName')}
            />
            {(!broadcastName && touched.broadcastName) && (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <FaTimesCircle className="mr-1" />
                Broadcast name must be entered.
              </p>
            )}
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-gray-700 mb-2">
              Broadcast Format<span className="text-red-500">*</span>
            </label>
            <select
              className={`border rounded p-2 w-full focus:outline-none focus:ring-2 ${
                (!broadcastFormat && touched.broadcastFormat) ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              value={broadcastFormat}
              onChange={handleBroadcastFormatChange}
              onBlur={() => handleBlur('broadcastFormat')}
            >
              <option value="" disabled hidden>
                Select broadcast format
              </option>
              <option value="Template Message">Template Message</option>
            </select>
            {(!broadcastFormat && touched.broadcastFormat) && (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <FaTimesCircle className="mr-1" />
                Format must be selected.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex flex-col mb-4 sm:mb-0 sm:mr-4 w-full sm:w-1/2">
            <label className="text-gray-700 mb-2">
              Recipient<span className="text-red-500">*</span>
            </label>
            <select
              className={`border rounded p-2 w-full focus:outline-none focus:ring-2 ${
                (!recipient && touched.recipient) ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              value={recipient}
              onChange={handleRecipientChange}
              onBlur={() => handleBlur('recipient')}
            >
              <option value="" disabled hidden>
                Select contact group for broadcast recipient
              </option>
              <option value="Group 1">All Contact</option>
            </select>
            {(!recipient && touched.recipient) && (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <FaTimesCircle className="mr-1" />
                Recipient must be selected.
              </p>
            )}
          </div>
          {broadcastFormat && (
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-gray-700 mb-2">
                Template Name<span className="text-red-500">*</span>
              </label>
              <select
                className={`border rounded p-2 w-full focus:outline-none focus:ring-2 ${
                  (!templateName && touched.templateName) ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                value={templateName}
                onChange={handleTemplateNameChange}
                onBlur={() => handleBlur('templateName')}
              >
                <option value="" disabled hidden>
                  Select template
                </option>
                <option value="Template 1">Team 37 - Digistar</option>
              </select>
              {(!templateName && touched.templateName) && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <FaTimesCircle className="mr-1" />
                  Template must be selected.
                </p>
              )}
            </div>
          )}
        </div>

        {templateName && (
          <div className="flex flex-col mb-4">
            <label className="text-gray-700 mb-2">
              Template Message<span className="text-red-500">*</span>
            </label>
            <textarea
              className={`border rounded p-2 w-full h-32 resize-none focus:outline-none focus:ring-2 ${
                (!message && touched.message) ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="Your message here..."
              value={message}
              onChange={handleMessageChange}
              onBlur={() => handleBlur('message')}
              readOnly
            />
            {(!message && touched.message) && (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <FaTimesCircle className="mr-1" />
                Message must be entered.
              </p>
            )}
          </div>
        )}
      </div>

      {/* New Empty Card with Title and Date & Time Picker */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-4 relative">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Broadcast Schedule</h3>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-gray-700 mb-2">
              Select Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className={`border rounded p-2 w-full focus:outline-none focus:ring-2 ${
                (!date && touched.date) ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              value={date}
              onChange={handleDateChange}
              onBlur={() => handleBlur('date')}
            />
            {(!date && touched.date) && (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <FaTimesCircle className="mr-1" />
                Date must be selected.
              </p>
            )}
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-gray-700 mb-2">
              Select Time<span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              className={`border rounded p-2 w-full focus:outline-none focus:ring-2 ${
                (!selectedTime && touched.selectedTime) ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              value={selectedTime}
              onChange={handleTimeChange}
              onBlur={() => handleBlur('selectedTime')}
              disabled={isPrimeTimeChecked}
            />
            {(!selectedTime && touched.selectedTime) && (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <FaTimesCircle className="mr-1" />
                Time must be selected.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="selectedDate"
                className="mr-2"
                checked={isTodayChecked}
                onChange={handleTodayCheckboxChange}
              />
              <label htmlFor="selectedDate" className="text-gray-700">
                Today
              </label>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="usePrimeTime"
                checked={isPrimeTimeChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="usePrimeTime" className="text-gray-700">
                Use Prime Time
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none"
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
