import React, { useState } from 'react';
import Link from 'next/link';
import MatchTable from '@/components/match-form/MatchTable';

export default function MatchForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputDate, setInputDate] = useState('');
  const [partnerInputDate, setPartnerInputDate] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [partnerInputTime, setPartnerInputTime] = useState('');
  const [gender, setGender] = useState('');
  const [partnerGender, setPartnerGender] = useState('');
  const [warningMessage, setWarningMessage] = useState('');
  const [showMatchTable, setShowMatchTable] = useState(false);

  const handleNextPage = () => {
    switch (currentPage) {
      case 1:
        if (inputDate !== '' && partnerInputDate !== '') {
          setCurrentPage(2);
          setWarningMessage('');
        } else {
          setWarningMessage('Please enter date of birth.');
        }
        break;
      case 2:
        if (inputTime !== '' && partnerInputTime !== '') {
          setCurrentPage(3);
          setWarningMessage('');
        } else {
          setWarningMessage('Please enter time of birth.');
        }
        break;
      case 3:
        if (gender !== '' && partnerGender !== '') {
          // Form submission logic
          console.log('Form submitted:', { inputDate, partnerInputDate, inputTime, partnerInputTime, gender, partnerGender });
          setWarningMessage('');
          setShowMatchTable(true);
        } else {
          setWarningMessage('Please select gender.');
        }
        break;
      default:
        break;
    }
  };

  const handleRestart = () => {
    setInputDate('');
    setPartnerInputDate('');
    setInputTime('');
    setPartnerInputTime('');
    setGender('');
    setPartnerGender('');
    setWarningMessage('');
    setCurrentPage(1);
    setShowMatchTable(false);
  };

  return (
    <>
      <article className="pt-16 sm:pt-24 flex-grow">
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
        <div className="mx-auto max-w-md p-6 rounded-lg shadow-lg mt-24 border border-gray-500">
          {!showMatchTable && currentPage === 1 && (
            <>
              <h2 className="text-white text-xl font-semibold mb-4">Please enter your birth date.</h2>
              <input
                type="date"
                id="inputDate"
                name="dateInput"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full bg-black text-white hover:bg-gray-700"
                required
              />
              <h2 className="text-white text-xl font-semibold mb-4">Please enter your partner birth date.</h2>
              <input
                type="date"
                id="partnerInputDate"
                name="partnerDateInput"
                value={partnerInputDate}
                onChange={(e) => setPartnerInputDate(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full bg-black text-white hover:bg-gray-700"
                required
              />
            </>
          )}
          {!showMatchTable && currentPage === 2 && (
            <>
              <h2 className="text-white text-xl font-semibold mb-4">Please enter your birth time.</h2>
              <input
                type="time"
                id="inputTime"
                name="timeInput"
                value={inputTime}
                onChange={(e) => setInputTime(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full bg-black text-white hover:bg-gray-700"
                required
              />
              <h2 className="text-white text-xl font-semibold mb-4">Please enter your partner birth time.</h2>
              <input
                type="time"
                id="partnerInputTime"
                name="partnerTimeInput"
                value={partnerInputTime}
                onChange={(e) => setPartnerInputTime(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full bg-black text-white hover:bg-gray-700"
                required
              />
            </>
          )}
          {!showMatchTable && currentPage === 3 && (
            <>
              <h2 className="text-white text-xl font-semibold mb-4">Please select your gender.</h2>
              <div className="mb-4">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="male" className="text-white">Male 🙋‍♂️</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="female" className="text-white">Female 🙋‍♀️</label>
              </div>
              <h2 className="text-white text-xl font-semibold mb-4">Please select your partner gender.</h2>
              <div className="mb-4">
                <input
                  type="radio"
                  id="maleP"
                  name="partnerGender"
                  value="Male"
                  onChange={(e) => setPartnerGender(e.target.value)}
                  className="mr-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="maleP" className="text-white">Male 🙋‍♂️</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="femaleP"
                  name="partnerGender"
                  value="Female"
                  onChange={(e) => setPartnerGender(e.target.value)}
                  className="mr-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="femaleP" className="text-white">Female 🙋‍♀️</label>
              </div>
            </>
          )}
          {warningMessage && <p className="text-red-500 mt-4">{warningMessage}</p>}
          {!showMatchTable && (
            <button
              onClick={handleNextPage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
            >
              {currentPage === 3 ? 'Submit' : 'Next'}
            </button>
          )}
          {!showMatchTable && (
            <button
              onClick={handleRestart}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-gray-600 ml-2"
            >
              Restart
            </button>
          )}
          {showMatchTable && (
            <MatchTable
              inputDate={inputDate}
              partnerInputDate={partnerInputDate}
              inputTime={inputTime}
              partnerInputTime={partnerInputTime}
              gender={gender}
              partnerGender={partnerGender}
              restart={handleRestart}
            />
          )}
        </div>
      </article>
    </>
  );
}
