import React, { useState, useEffect } from 'react';
import Allvariable from '../AllVariable';

export default function Elements({ singleDigits }) {
  const [selectedElements, setSelectedElements] = useState([]);

  useEffect(() => {
    const wood = singleDigits.includes(4) && singleDigits.includes(3);
    const fire = singleDigits.includes(9);
    const earth = singleDigits.includes(2) && singleDigits.includes(5) && singleDigits.includes(8);
    const metal = singleDigits.includes(6) && singleDigits.includes(7);
    const water = singleDigits.includes(1);

    const elements = [];
    if (wood) elements.push('Wood Element');
    if (fire) elements.push('Fire Element');
    if (earth) elements.push('Earth Element');
    if (metal) elements.push('Metal Element');
    if (water) elements.push('Water Element');

    setSelectedElements(elements);
  }, [singleDigits]);

  return (
    <div>
      <div>
        {selectedElements.length > 0 &&
          <div>
            <h1 className='text-black font-bold'>You have these Elements:</h1>
          </div>
        }
        {selectedElements.map((element, index) => (
          <p key={index} className='text-black'>{element}</p>
        ))}
      </div>
      <Allvariable elements={selectedElements} />
    </div>    
  );
}
