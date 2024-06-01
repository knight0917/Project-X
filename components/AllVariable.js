// import React, { useEffect, useState } from 'react';

// const Allvariable = ({inputDate, inputTime, gender, driver, conductor, superNo, description, elements}) => {
//     const [dob, setDob] = useState('');
//     const [time, setTime] = useState('');
//     const [sex, setSex] = useState('');
//     const [driver_no, setDriver_no] = useState('');
//     const [conductor_no, setConductor_no] = useState('');
//     const [super_no, setSuper_no] = useState('');
//     const [plane, setPlane] = useState('');
//     const [element, setElement] = useState('');
//     const [qualities, setQualities] = useState('');

//     const aeroplane = "disco_dance";

//     useEffect(() => {
//         setDob(inputDate);
//         setTime(inputTime);
//         setSex(gender);
//         setDriver_no(driver);
//         setConductor_no(conductor);
//         setSuper_no(superNo);
//         setPlane(aeroplane);
//         setElement(elements);
//         setQualities(description);
//     }, [inputDate, inputTime, gender, driver, conductor, superNo, description, elements]);

//     useEffect(() => {
//         if (elements && elements.length > 0) {
//             let elementList = elements.join(', ');
//             console.log(elementList);
//         }
//     }, [elements]);

//     console.log(dob);
//     console.log(time);
//     console.log(sex);
//     console.log(driver_no);
//     console.log(conductor_no);
//     console.log(super_no);
//     console.log(plane);
//     console.log(element);
//     console.log(qualities);

//     return (
//         <div>
//             <p>Date of Birth: {dob}</p>
//             <p>Time: {time}</p>
//             <p>Gender: {sex}</p>
//             <p>Driver Number: {driver_no}</p>
//             <p>Conductor Number: {conductor_no}</p>
//             <p>Supervisor Number: {super_no}</p>
//             <p>Plane: {plane}</p>
//             <p>Elements: {element}</p>
//             <p>Qualities: {qualities}</p>
//         </div>
//     );
// }

// export default Allvariable;


import React, { useEffect, useState } from 'react';

const Allvariable = ({inputDate, inputTime, gender, driver, conductor, superNo, description, elements}) => {
    const [dob, setDob] = useState(inputDate);
    const [time, setTime] = useState(inputTime);
    const [sex, setSex] = useState(gender);
    const [driver_no, setDriver_no] = useState(driver);
    const [conductor_no, setConductor_no] = useState(conductor);
    const [super_no, setSuper_no] = useState(superNo);
    const [plane, setPlane] = useState('disco_dance');
    const [element, setElement] = useState(elements);
    const [qualities, setQualities] = useState(description);
    const [message, setMessage] = useState('');
    const [petName, setPetName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [sixOrNine, setSixOrNine] = useState('');

    useEffect(() => {
        if (elements && elements.length > 0) {
            let elementList = elements.join(', ');
            console.log('Elements:', elementList);
        }
    }, [elements]);

    useEffect(() => {
        console.log('dob:', dob);
        console.log('time:', time);
        console.log('sex:', sex);
        console.log('driver_no:', driver_no);
        console.log('conductor_no:', conductor_no);
        console.log('super_no:', super_no);
        console.log('plane:', plane);
        console.log('element:', element);
        console.log('qualities:', qualities);
    }, [dob, time, sex, driver_no, conductor_no, super_no, plane, element, qualities]);

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/numerology', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dob,
                    time,
                    sex,
                    driver_no,
                    conductor_no,
                    super_no,
                    plane,
                    element,
                    qualities
                }),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || 'Something went wrong');
            }

            setMessage('Pet added successfully!');
            setPetName('');
            setOwnerName('');
            setSixOrNine('');
        } catch (err) {
            setMessage(err.message);
        }
    };

    return (
        <div className='text-black'>
            <button onClick={handleSubmit}>Submit</button>
            <hr></hr>
<br></br>
            <p className='text-red-900 italic  tracking-widest font-extrabold'>{message}</p>
        </div>
    );
}

export default Allvariable;
