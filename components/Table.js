
import React from 'react';

import user_input from './function/CalFunction';
import LushuGrid from './gridplane/LushuGrid';
// import Elements from './gridplane/Elements';
import DriverQuality from './gridplane/DriverQuality';

// import Allvariable from './AllVariable';

export default function Table({ inputDate, inputTime, gender, onRestart}) {
  const result = user_input(inputDate);
  

  return (
    <div>
      <LushuGrid number={result.singleDigits} />
      
      <div className="">
        <h2 className="">Numerology Results:</h2>
        <div id="numerologyResults">
          <p id="driver" className="bigger-font text-black">Driver Number: {result.addDriver}</p>
          <p id="conductor" className="bigger-font text-black">Conductor Number: {result.addConductor}</p>
          {result.suNumber && (
            <p id="super" className="bigger-font text-black">Super Number: {result.suNumber}</p>
          )}
        </div>
        <button onClick={onRestart} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Restart</button>
      </div>
      <div>
      <div>
        <h1 className='text-black font-bold'>You have these planes:</h1>
        <p className='text-black'>{result.disPlane}</p>
      </div>
        {/* <Elements singleDigits={result.singleDigits} /> */}
        <DriverQuality driver={result.addDriver} />
      </div>
      {/* <Allvariable 
        inputDate={inputDate} 
        inputTime={inputTime} 
        gender={gender} 
        driver={result.addDriver} 
        conductor={result.addConductor} 
        superNo = {result.suNumber}  
        /> */}
    </div>
  );
}

