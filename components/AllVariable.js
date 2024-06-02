
// export default function AllVariable(
//     {inputDate, 
//     inputTime, 
//     sex, 
//     driverNo, 
//     conductorNo, 
//     superNo, 
//     plane, 
//     element, 
//     driverQualities}
// ){
//     console.log(inputDate, 
//         inputTime, 
//         sex, 
//         driverNo, 
//         conductorNo, 
//         superNo, 
//         plane, 
//         element, 
//         driverQualities)
// }



import React, { useState } from 'react';

function YourComponent() {
    const [message, setMessage] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [sex, setSex] = useState('');
    const [driverNo, setDriverNo] = useState('');
    const [conductorNo, setConductorNo] = useState('');
    const [superNo, setSuperNo] = useState('');
    const [plane, setPlane] = useState('');
    const [element, setElement] = useState('');
    const [driverQualities, setDriverQualities] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/numerology', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputDate,
                    inputTime,
                    sex,
                    driverNo,
                    conductorNo,
                    superNo,
                    plane,
                    element,
                    driverQualities
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Input Date:
                    <input type="text" value={inputDate} onChange={e => setInputDate(e.target.value)} />
                </label>
                <label>
                    Input Time:
                    <input type="text" value={inputTime} onChange={e => setInputTime(e.target.value)} />
                </label>
                <label>
                    Sex:
                    <input type="text" value={sex} onChange={e => setSex(e.target.value)} />
                </label>
                <label>
                    Driver No:
                    <input type="text" value={driverNo} onChange={e => setDriverNo(e.target.value)} />
                </label>
                <label>
                    Conductor No:
                    <input type="text" value={conductorNo} onChange={e => setConductorNo(e.target.value)} />
                </label>
                <label>
                    Super No:
                    <input type="text" value={superNo} onChange={e => setSuperNo(e.target.value)} />
                </label>
                <label>
                    Plane:
                    <input type="text" value={plane} onChange={e => setPlane(e.target.value)} />
                </label>
                <label>
                    Element:
                    <input type="text" value={element} onChange={e => setElement(e.target.value)} />
                </label>
                <label>
                    Driver Qualities:
                    <input type="text" value={driverQualities} onChange={e => setDriverQualities(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default YourComponent;
