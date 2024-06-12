

import React, { useState } from 'react';

export default function MatchForm() {


  return (
    <div className='flex items-center justify-center'>
      Inside match-form
    </div>
  );
}




// import React, { useState } from 'react';

// export default function MatchForm() {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [inputDate, setInputDate] = useState('');
// //   const [inputTime, setInputTime] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [warningMessage, setWarningMessage] = useState('');

//   const handleNextPage = async() => {
//     switch (currentPage) {
//       case 1:
//         if (inputDate !== '') {
//           setCurrentPage(2);
//         } else {
//           setWarningMessage('Please fill out all required fields.');
//         }
//         break;
//       case 2:
//         if (inputTime !== '') {
//           setCurrentPage(3);
//         } else {
//           setWarningMessage('Please enter your birth time.');
//         }
//         break;
//       case 3:
//         if (gender !== '') {
//           console.log('Form submitted:', { inputDate, inputTime, gender });
//           setCurrentPage(4);
//         }else {
//             setWarningMessage('Please select your gender.');
//         }
//         break;
//         case 4:
//           try {
//             const formData = {
//               DOB: inputDate,
//               time: inputTime,
//               gender: gender,
//               // Add other form data fields here as needed
//             };

//             const response = await sendDataToDB(formData);
//             console.log('Data added successfully:', response);
//           // Optionally, reset form fields or show a success message

//           // Now send numerology data
//             const numerologyData = {
//               DOB: inputDate,
//               time: inputTime,
//               gender: gender,
//             // Add other numerology data fields here as needed
//             };
//             const numerologyResponse = await sendNumerologyDataToDB(numerologyData);
//             console.log('Numerology data added successfully:', numerologyResponse);
//           } catch (error) {
//             console.error('Error adding data:', error);
//             // Handle error (e.g., display error message to user)
//           }
//         break;
//       default:
//         break;
//     }
//   };

//   // for resetting the value
//   const handleRestart = () => {
//     setInputDate('');
//     setInputTime('');
//     setGender('');
//     setWarningMessage('');
//     setCurrentPage(1);
//   };

//   return (
//     <div className="mx-auto max-w-md p-6 bg-emerald-200 rounded-lg shadow-lg">
//       {currentPage === 1 && (
//         <>
//           <h2 className="text-black text-xl font-semibold mb-4">Please enter your birth details.</h2>
//           <input
//             type="date"
//             id="inputDate"
//             name="dateInput"
//             value={inputDate}
//             onChange={(e) => setInputDate(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full bg-white text-black"
//             required
//           />
//           <input
//             type="time"
//             id="inputTime"
//             name="timeInput"
//             value={inputTime}
//             onChange={(e) => setInputTime(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full bg-white text-black"
//             required
//           />
//         </>
//       )}
//       {currentPage === 2 && (
//         <>
//           <h2 className="text-black text-xl font-semibold mb-4">Please enter your partner birth details.</h2>
//           <input
//             type="date"
//             id="inputDate"
//             name="dateInput"
//             value={inputDate}
//             onChange={(e) => setInputDate(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full bg-white text-black"
//             required
//           />
//           <input
//             type="time"
//             id="inputTime"
//             name="timeInput"
//             value={inputTime}
//             onChange={(e) => setInputTime(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full bg-white text-black"
//             required
//           />
//         </>
//       )}
//       {currentPage !== 3 &&(
//         <button onClick={handleNextPage} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Next</button>
//       )}
//       <span className="text-red-500 block mt-2">{warningMessage}</span>
//       {currentPage === 4 && (<>
//         {/* <Table inputDate={inputDate} inputTime={inputTime} gender={gender} onRestart = {handleRestart} /> */}
//       </>)}
//     </div>
//   );
// }
