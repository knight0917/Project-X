// components/Planes.js
import React, { useEffect } from 'react';
import { SendToDB } from '@/pages/api/connDB';

export default function Planes({ singleDigits }) {
  const success1Digits = singleDigits.includes(4) && singleDigits.includes(5) && singleDigits.includes(6);
  const mentalDigits = singleDigits.includes(4) && singleDigits.includes(9) && singleDigits.includes(2);
  const emotionalDigits = singleDigits.includes(3) && singleDigits.includes(5) && singleDigits.includes(7);
  const practicalDigits = singleDigits.includes(8) && singleDigits.includes(1) && singleDigits.includes(6);
  const success2Digits = singleDigits.includes(2) && singleDigits.includes(5) && singleDigits.includes(8);
  const actionDigits = singleDigits.includes(2) && singleDigits.includes(7) && singleDigits.includes(6);
  const willDigits = singleDigits.includes(9) && singleDigits.includes(5) && singleDigits.includes(1);
  const thoughtDigits = singleDigits.includes(4) && singleDigits.includes(3) && singleDigits.includes(8);
  
  const anyConditionMet = success1Digits || mentalDigits || emotionalDigits || practicalDigits || success2Digits || actionDigits || willDigits || thoughtDigits;
  
  useEffect(() => {
  const sendPlanesToDB = async()=>{
      try{
        const planes= {
          success1Digits,
          mentalDigits,
          emotionalDigits,
          practicalDigits,
          success2Digits,
          actionDigits,
          willDigits,
          thoughtDigits
        };

        const response = await SendToDB(planes);
        console.log('Planes data added successfully:', response);
      }catch(error){
        console.error('Error adding planes data:', error);
      }
    }

    sendPlanesToDB();
  }, []);

  return (
    <div>
      {anyConditionMet &&
        <div>
          <h1 className='text-black font-bold'>You have these planes:</h1>
        </div>
      }
      {success1Digits && <p className='text-black'>Success Plane I</p>}
      {mentalDigits && <p className='text-black'>Mental Plane</p>}
      {emotionalDigits && <p className='text-black'>Emotional Plane</p>}
      {practicalDigits && <p className='text-black'>Practical Plane</p>}
      {success2Digits && <p className='text-black'>Success Plane II</p>}
      {actionDigits && <p className='text-black'>Action Plane</p>}
      {willDigits && <p className='text-black'>Will Plane</p>}
      {thoughtDigits && <p className='text-black'>Thought Plane</p>}
    </div>
  );
}

