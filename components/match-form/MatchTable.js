
import React from 'react';
import user_input from '../function/CalFunction';
import LushuGrid from '../gridplane/LushuGrid';

// import AllVariable from './AllVariable';


export default function MatchTable({ inputDate, inputTime, gender, partnerInputDate, partnerInputTime, partnerGender, restart}) {
  const result = user_input(inputDate);
  const partnerResult = user_input(partnerInputDate);
  

  return (
    <div className='text-gray-500'>
        <div className="">
            <p className='font-bold'>Your DOB & time: {inputDate} {inputTime}</p>
            <LushuGrid number={result.singleDigits} />
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
      </div>
        <div className="mt-4">
            <p className='font-bold'>Your Partner DOB & time: {partnerInputDate} {partnerInputTime}</p>
            <LushuGrid number={partnerResult.singleDigits} />
            <h2 className="font-bold mt-4">Numerology Results:</h2>
            <div id="numerologyResults">
                <p id="driver" className="bigger-font text-white-500 italic">Driver Number: {partnerResult.addDriver}</p>
                <p id="conductor" className="bigger-font text-gray-500 italic">Conductor Number: {partnerResult.addConductor}</p>

                {partnerResult.suNumber && (
                    <p id="super" className="text-gray-500"> Super number: 11</p>
                )}

                {partnerResult.disPlane && (
                    <div>
                        <p className='font-bold mt-4'>Planes:</p>
                        <p className='italic'> {partnerResult.disPlane}</p>
                    </div>
                )}

                {partnerResult.disElements && (
                    <div>
                        <p className='font-bold mt-4'>Elements:</p>
                        <p className='italic'> {partnerResult.disElements}</p>
                    </div>
                )}

                <p className='font-bold mt-4'>Driver Qualitites:</p>
                <p className='text-gray-300 italic'> {partnerResult.DriverQual}</p>
            </div>
      </div>
        <button onClick={restart} className="bg-sky-950 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Restart</button>
    </div>
  );
}

