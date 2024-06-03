
import React from 'react';

import user_input from './function/CalFunction';
import LushuGrid from './gridplane/LushuGrid';
import AllVariable from './AllVariable';


export default function Table({ inputDate, inputTime, gender, onRestart}) {
  const result = user_input(inputDate);
  

  return (
    <div className='text-black'>
      <p className='font-bold'>Your DOB & time: {inputDate} {inputTime}</p>
      <LushuGrid number={result.singleDigits} />
      <div className="">
        <h2 className="font-bold">Numerology Results:</h2>
        <div id="numerologyResults">
          <p id="driver" className="bigger-font text-black">Driver Number: {result.addDriver}</p>
          <p id="conductor" className="bigger-font text-black">Conductor Number: {result.addConductor}</p>

          {result.suNumber && (
              <p id="super" className="text-black"> Super number: 11</p>
          )}

          {result.disPlane && (
            <div>
              <p className='font-bold'>Planes:</p>
              <p className='text-blue-900'> {result.disPlane}</p>
            </div>
          )}

          {result.disElements && (
            <div>
              <p className='font-bold'>Elements:</p>
              <p className='text-brown-900 italic'> {result.disElements}</p>
            </div>
          )}

          <p className='font-bold'>Driver Qualitites:</p>
          <p className='text-red-900 italic'> {result.DriverQual}</p>

        </div>
        <button onClick={onRestart} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Restart</button>
      </div>
      {/* <div>
        <h1 className='text-black font-bold'>You have these planes:</h1>
        <p className='text-black'>{result.disPlane}</p>
      </div> */}
      <div>
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
    </div>
  );
}

