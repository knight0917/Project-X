import inputDate from '@/components/Table'

// Aggregate the data into a single object or array
const aggregatedData = {
  inputDate
  // Add data from other files
};

// Send the aggregated data to the backend
const sendDataToBackend = async () => {
  try {
    const response = await fetch('/api/connDB', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aggregatedData),
    });
    if (!response.ok) {
      throw new Error('Failed to send data to backend');
    }
    console.log('Data sent successfully');
  } catch (error) {
    console.error('Error:', error);
  }
};

// Call the function to send data to the backend
sendDataToBackend();
