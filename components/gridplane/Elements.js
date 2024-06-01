import React from 'react';
// import Allvariable from '../AllVariable';

export default function Elements({ singleDigits }) {
  const wood = singleDigits.includes(4) && singleDigits.includes(3);
  const fire = singleDigits.includes(9);
  const earth = singleDigits.includes(2) && singleDigits.includes(5) && singleDigits.includes(8);
  const metal = singleDigits.includes(6) && singleDigits.includes(7);
  const water = singleDigits.includes(1);
  
  const anyConditionMet = wood || fire || earth || metal || water;

  return (
    <div>
      <div>
        {anyConditionMet &&
          <div>
            <h1 className='text-black font-bold'>You have these Elements:</h1>
          </div>
        }
        {wood && <p className='text-black'>Wood Element</p>}
        {fire && <p className='text-black'>Fire Element</p>}
        {earth && <p className='text-black'>Earth Element</p>}
        {metal && <p className='text-black'>Metal Element</p>}
        {water && <p className='text-black'>Water Element</p>}
      </div>
      {/* <Allvariable element={anyConditionMet} /> */}
    </div>    
  );
}
