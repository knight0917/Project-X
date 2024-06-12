
import React from 'react';

import user_input from './function/CalFunction';
import LushuGrid from './gridplane/LushuGrid';

import AllVariable from './AllVariable';


export default function Table({ inputDate, inputTime, gender, onRestart}) {
  const result = user_input(inputDate);
  

  return (
    <div className='text-gray-500'>
      <p className='font-bold'>Your DOB & time: {inputDate} {inputTime}</p>
      <LushuGrid number={result.singleDigits} />
      <div className="">
        <h2 className="font-bold mt-4">Numerology Results:</h2>
        <div id="numerologyResults">
          <p id="driver" className="bigger-font text-white-500 italic">Driver Number: {result.addDriver}</p>
          <p id="conductor" className="bigger-font text-gray-500 italic">Conductor Number: {result.addConductor}</p>

          {result.suNumber && (
              <p id="super" className="text-gray-500"> Super number: 11</p>
          )}

          {result.disPlane && (
            <div>
              <p className='font-bold mt-4'>Planes:</p>
              <p className='italic'> {result.disPlane}</p>
            </div>
          )}

          {result.disElements && (
            <div>
              <p className='font-bold mt-4'>Elements:</p>
              <p className='italic'> {result.disElements}</p>
            </div>
          )}

          <p className='font-bold mt-4'>Driver Qualitites:</p>
          <p className='text-gray-300 italic'> {result.DriverQual}</p>

        </div>
        <button onClick={onRestart} className="bg-sky-950 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Restart</button>
      </div>
        <AllVariable
          inputDate={inputDate} 
          inputTime={inputTime} 
          sex={gender}
          driverNo={result.addDriver}
          conductorNo={result.addConductor}
          superNo={result.suNumber}
          plane={result.disPlane}
          element={result.disElements}
          driverQualities={result.DriverQual}
            />
    </div>
  );
}

