import React, { useState } from "react";
import Table from "../components/Table";
import Link from "next/link";

export default function MainForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [gender, setGender] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handleNextPage = async () => {
    switch (currentPage) {
      case 1:
        if (inputDate !== "") {
          setCurrentPage(2);
        } else {
          setWarningMessage("Please fill out all required fields.");
        }
        break;
      case 2:
        if (inputTime !== "") {
          setCurrentPage(3);
        } else {
          setWarningMessage("Please enter your birth time.");
        }
        break;
      case 3:
        if (gender !== "") {
          setCurrentPage(4);
        } else {
          setWarningMessage("Please select your gender.");
        }
        break;
      case 4:
        try {
          const formData = {
            DOB: inputDate,
            time: inputTime,
            gender: gender,
          };

          const response = await sendDataToDB(formData);
          const numerologyData = {
            DOB: inputDate,
            time: inputTime,
            gender: gender,
          };
          const numerologyResponse = await sendNumerologyDataToDB(
            numerologyData
          );
        } catch (error) {
          console.error("Error adding data:", error);
        }
        break;
      default:
        break;
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setWarningMessage(""); // Reset the warning message on input change
  };

  const handleRestart = () => {
    setInputDate("");
    setInputTime("");
    setGender("");
    setWarningMessage("");
    setCurrentPage(1);
  };

  return (
    <article className="pt-16 sm:pt-18 flex-grow">
      <div className="mx-auto max-w-2xl px-4 md:px-0">
        <Link
          className="dark:hover:text-gray-100 inline-flex items-center py-4 dark:text-gray-300 text-gray-500 hover:text-gray-700 text-sm sm:text-base"
          href="/"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>{" "}
          <span className="ml-1">home</span>
        </Link>
      </div>
      <div className="mx-auto max-w-md p-6 rounded-lg shadow-lg mt-8 border border-gray-500">
        {currentPage === 1 && (
          <>
            <h2 className="dark:text-white text-xl font-semibold mb-4">
              Date of birth
            </h2>
            <input
              type="date"
              id="inputDate"
              name="dateInput"
              value={inputDate}
              onChange={handleInputChange(setInputDate)}
              className="border dark:border-gray-300 rounded-md px-3 py-2 mb-4 w-full dark:bg-black dark:text-white dark:hover:bg-gray-700 cursor-pointer"
              required
            />
          </>
        )}
        {currentPage === 2 && (
          <>
            <h2 className="dark:text-white text-xl font-semibold mb-4">
              Time of birth
            </h2>
            <input
              type="time"
              id="inputTime"
              name="timeInput"
              value={inputTime}
              onChange={handleInputChange(setInputTime)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full dark:bg-black dark:text-white dark:hover:bg-gray-700 cursor-pointer"
              required
            />
          </>
        )}
        {currentPage === 3 && (
          <>
            <h2 className="dark:text-white text-xl font-semibold mb-4">
              Gender
            </h2>
            <div className="mb-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={handleInputChange(setGender)}
                className="mr-2 rounded-full border border-gray-300 dark:text-gray-700 focus:outline-none focus:border-blue-500"
              />
              <label htmlFor="male" className="dark:text-white">
                Male 🙋‍♂️
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleInputChange(setGender)}
                className="mr-2 rounded-full border dark:border-gray-300 dark:text-gray-700 focus:outline-none focus:border-blue-500"
              />
              <label htmlFor="female" className="dark:text-white">
                Female 🙋‍♀️
              </label>
            </div>
          </>
        )}
        {currentPage !== 4 && (
          <button
            onClick={handleNextPage}
            className="border border-gray-300 bg-black text-white dark:bg-white dark:text-black font-semibold px-4 py-2 rounded-md mt-4 hover:bg-black hover:text-white"
          >
            Next
          </button>
        )}
        <span className="text-red-500 block mt-2">{warningMessage}</span>
        {currentPage === 4 && (
          <Table
            inputDate={inputDate}
            inputTime={inputTime}
            gender={gender}
            onRestart={handleRestart}
          />
        )}
      </div>
    </article>
  );
}
