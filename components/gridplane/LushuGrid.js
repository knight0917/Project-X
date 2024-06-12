import React, { useState, useEffect } from 'react';

const LushuGrid = ({ number }) => { 
  const [digits, setDigits] = useState([]);
  
  useEffect(() => {
    // Function to convert the number to an array of digits
    const convertNumberToArray = () => {
      const digitArray = Array.from(String(number), Number); // Convert number to array of digits
      setDigits(digitArray);
    };

    convertNumberToArray();
  }, [number]); 

  // Create an object to map digits to their respective grid cell contents
  const gridContents = digits.reduce((acc, digit) => {
    acc[digit] = acc[digit] ? acc[digit] + digit : digit.toString();
    return acc;
  }, {});

  // Predefined grid layout
  const gridLayout = [
    { id: 'four', value: 4 },
    { id: 'nine', value: 9 },
    { id: 'two', value: 2 },
    { id: 'three', value: 3 },
    { id: 'five', value: 5 },
    { id: 'seven', value: 7 },
    { id: 'eight', value: 8 },
    { id: 'one', value: 1 },
    { id: 'six', value: 6 }
  ];

  return (
    <div className='mt-4'>
      <div className="grid grid-cols-3 gap-4">
        {gridLayout.map((cell) => (
          <div id={cell.id} className="cell bg-black-900 border border-gray-400 rounded-md p-4 text-center text-white" key={cell.id}>
            {gridContents[cell.value] || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LushuGrid;
