import React from "react";

import user_input from "./function/CalFunction";
import LushuGrid from "./gridplane/LushuGrid";

import AllVariable from "./AllVariable";

export default function Table({ inputDate, inputTime, gender, onRestart }) {
  const result = user_input(inputDate);

  return (
    <div className=" gap-6 flex flex-col">
      <div className="font-bold gap-x-4 flex ">
        <p>
          DOB :{" "}
          <span className="font-light dark:text-[#A1A1AA]">{inputDate}</span>
        </p>
        <p>
          Time:{" "}
          <span className="font-light dark:text-[#A1A1AA]">{inputTime}</span>
        </p>
      </div>
      <LushuGrid number={result.singleDigits} />
      <div className="">
        <h2 className="font-bold mt-4">Numerology Results:</h2>
        <div id="numerologyResults" className="">
          <p id="driver" className="bigger-font dark:text-[#A1A1AA] font-light">
            Driver Number: {result.addDriver}
          </p>
          <p
            id="conductor"
            className="bigger-font dark:text-[#A1A1AA] font-light"
          >
            Conductor Number: {result.addConductor}
          </p>

          {result.suNumber && (
            <p id="super" className="dark:text-gray-500">
              {" "}
              Super number: 11
            </p>
          )}

          {result.disPlane && (
            <div>
              <p className="font-bold mt-4">Planes:</p>
              <p className="font-light dark:text-[#A1A1AA]">
                {" "}
                {result.disPlane}
              </p>
            </div>
          )}

          {result.disElements && (
            <div>
              <p className="font-bold mt-4">Elements:</p>
              <p className="font-light dark:text-[#A1A1AA]">
                {result.disElements}
              </p>
            </div>
          )}

          <p className="font-bold mt-4">Driver Qualitites:</p>
          <p className="dark:text-[#A1A1AA] font-light"> {result.DriverQual}</p>
        </div>
        <button
          onClick={onRestart}
          className="bg-black dark:bg-white dark:text-black text-white font-semibold px-4 py-2 rounded-md mt-4 dark:hover:bg-blue-600 hover:bg-black  border border-black"
        >
          Restart
        </button>
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
      />
    </div>
  );
}
