
// // export default function AllVariable(
// //     {inputDate, 
// //     inputTime, 
// //     sex, 
// //     driverNo, 
// //     conductorNo, 
// //     superNo, 
// //     plane, 
// //     element, 
// //     driverQualities}
// // ){
// //     console.log(inputDate, 
// //         inputTime, 
// //         sex, 
// //         driverNo, 
// //         conductorNo, 
// //         superNo, 
// //         plane, 
// //         element, 
// //         driverQualities)
// // }



// import React, { useState } from 'react';

// function AllVariable(
//     inputDate, 
//     inputTime, 
//     sex, 
//     driverNo, 
//     conductorNo, 
//     superNo, 
//     plane, 
//     element, 
//     driverQualities) {
   

//     console.log(inputDate, 
//         inputTime, 
//         sex, 
//         driverNo, 
//         conductorNo, 
//         superNo, 
//         plane, 
//         element, 
//         driverQualities)

//         const [message, setMessage] = useState('');

//     const handleSubmit = async () => {
//         const [db_dob, setDb_dob] = useState(inputDate);
//         const [db_time, setDb_time] = useState(inputTime);
//         const [db_sex, setDb_sex] = useState(sex);
//         const [db_driver_no, setDb_driver_no] = useState(driverNo);
//         const [db_conductor_no, setDb_conductor_no] = useState(conductorNo);
//         const [db_super_no, setDb_super_no] = useState(superNo);
//         const [db_plane, setDb_plane] = useState(plane);
//         const [db_element, setDb_element] = useState(element);
//         const [db_quality, setDb_quality] = useState(driverQualities);

//         try {
//             const response = await fetch('/api/numerology', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     db_dob,
//                     db_time,
//                     db_sex,
//                     db_driver_no,
//                     db_conductor_no,
//                     db_super_no,
//                     db_plane,
//                     db_element,
//                     db_quality
//                 }),
//             });

//             if (!response.ok) {
//                 const result = await response.json();
//                 throw new Error(result.error || 'Something went wrong');
//             }

//             setMessage('Data sent successfully!');
//         } catch (err) {
//             setMessage(err.message);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <button type="submit" className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-blue-60">Submit</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// }

// export default AllVariable;





// SAVES DATA ON SUBMIT BUTTON CLICK--------------------------------------------------
// import React, { useState } from 'react';

// function AllVariable({ inputDate, inputTime, sex, driverNo, conductorNo, superNo, plane, element, driverQualities }) {
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const db_dob = inputDate;
//         const db_time = inputTime;
//         const db_sex = sex;
//         const db_driver_no = driverNo;
//         const db_conductor_no = conductorNo;
//         const db_super_no = Boolean(superNo);
//         const db_plane = plane;
//         const db_element = element;
//         const db_quality = driverQualities;

//         try {
//             const response = await fetch('/api/numerology', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     db_dob,
//                     db_time,
//                     db_sex,
//                     db_driver_no,
//                     db_conductor_no,
//                     db_super_no,
//                     db_plane,
//                     db_element,
//                     db_quality
//                 }),
//             });

//             if (!response.ok) {
//                 const result = await response.json();
//                 throw new Error(result.error || 'Something went wrong');
//             }

//             setMessage('Data sent successfully!');
//         } catch (err) {
//             setMessage(err.message);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <button type="submit" className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Submit</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// }

// export default AllVariable;




// SAVES DATA AUTOMATICALLY---------------------------------------------------
import React, { useState, useEffect } from 'react';

function AllVariable({ inputDate, inputTime, sex, driverNo, conductorNo, superNo, plane, element, driverQualities }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const db_dob = inputDate;
        const db_time = inputTime;
        const db_sex = sex;
        const db_driver_no = driverNo;
        const db_conductor_no = conductorNo;
        const db_super_no = Boolean(superNo);
        const db_plane = plane;
        const db_element = element;
        const db_quality = driverQualities;

        const sendData = async () => {
            try {
                const response = await fetch('/api/numerology', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        db_dob,
                        db_time,
                        db_sex,
                        db_driver_no,
                        db_conductor_no,
                        db_super_no,
                        db_plane,
                        db_element,
                        db_quality
                    }),
                });

                if (!response.ok) {
                    const result = await response.json();
                    throw new Error(result.error || 'Something went wrong');
                }

                setMessage('Data sent successfully!');
            } catch (err) {
                setMessage(err.message);
            }
        };

        sendData();
    }, [inputDate, inputTime, sex, driverNo, conductorNo, superNo, plane, element, driverQualities]);

    return (
        <div>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AllVariable;
