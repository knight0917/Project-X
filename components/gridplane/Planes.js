// components/Planes.js
import React, { useEffect } from 'react';
import Allvariable from '../AllVariable';

export default function Planes({ singleDigits }) {
  const success1Digits = singleDigits.includes(4) && singleDigits.includes(5) && singleDigits.includes(6);
  const mentalDigits = singleDigits.includes(4) && singleDigits.includes(9) && singleDigits.includes(2);
  const emotionalDigits = singleDigits.includes(3) && singleDigits.includes(5) && singleDigits.includes(7);
  const practicalDigits = singleDigits.includes(8) && singleDigits.includes(1) && singleDigits.includes(6);
  const success2Digits = singleDigits.includes(2) && singleDigits.includes(5) && singleDigits.includes(8);
  const actionDigits = singleDigits.includes(2) && singleDigits.includes(7) && singleDigits.includes(6);
  const willDigits = singleDigits.includes(9) && singleDigits.includes(5) && singleDigits.includes(1);
  const thoughtDigits = singleDigits.includes(4) && singleDigits.includes(3) && singleDigits.includes(8);
  
  let activePlanes = [];

  if (success1Digits) {
    activePlanes.push('Success Plane I');
  }
  if (mentalDigits) {
    activePlanes.push('Mental Plane');
  }
  if (emotionalDigits) {
    activePlanes.push('Emotional Plane');
  }
  if (practicalDigits) {
    activePlanes.push('Practical Plane');
  }
  if (success2Digits) {
    activePlanes.push('Success Plane II');
  }
  if (actionDigits) {
    activePlanes.push('Action Plane');
  }
  if (willDigits) {
    activePlanes.push('Will Plane');
  }
  if (thoughtDigits) {
    activePlanes.push('Thought Plane');
  }
  
  const anyConditionMet = activePlanes.length > 0;

  let displayPlane = activePlanes.join(', ')

  return (
    <div>
      {anyConditionMet &&
        <div>
          <h1 className='text-black font-bold'>You have these planes:</h1>
          {activePlanes.map((plane, index) => (
            <p key={index} className='text-black'>{plane}</p>
          ))}
        </div>
      }
      <Allvariable displayPlane={displayPlane} />
    </div>
  );
}
