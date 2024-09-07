// src/api/primetimeApi.js

export const fetchPrimeTimeData = async () => {
    try {
      const response = await fetch('https://5628-2404-8000-1024-1a7a-22ac-1461-b229-4046.ngrok-free.app/blast/primetime', {
        headers: {
          'ngrok-skip-browser-warning': 'true', // Bypass Ngrok warning
        },
        // Optionally add mode: 'cors' if supported by the server
        mode: 'cors', // Explicitly set CORS mode if the server supports it
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const contentType = response.headers.get('content-type');
  
      // Check if the response is JSON
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('Fetched data:', data); // Debugging line
        return data;
      } else {
        // If the response is not JSON, log the raw text
        const text = await response.text();
        console.error('Received non-JSON response:', text); // More detailed logging
        throw new Error('Received data is not in JSON format');
      }
    } catch (error) {
      console.error('Error fetching prime time data:', error);
      throw error; // Throw the error to be caught in the component
    }
  };
  