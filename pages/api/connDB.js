
export async function SendToDB(numerologyData) {
  try {
    const response = await fetch('/api/connDB', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(numerologyData),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Failed to add numerology data');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error sending numerology data to the server:', error);
    throw error;
  }
}
