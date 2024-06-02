
import React, { useEffect, useState } from 'react';

const Allvariable = (
    {
        inputDate, 
        inputTime, 
        gender, 
        driver, 
        conductor, 
        superNo, 
        description, 
        elements, 
        displayPlane
    }) => {

    const [dob, setDob] = useState(inputDate);
    const [time, setTime] = useState(inputTime);
    const [sex, setSex] = useState(gender);

    const [driver_no, setDriver_no] = useState(driver);
    const [conductor_no, setConductor_no] = useState(conductor);
    const [super_no, setSuper_no] = useState(superNo);

    const [plane, setPlane] = useState(displayPlane);
    const [element, setElement] = useState(elements);

    const [qualities, setQualities] = useState(description);
    const [elementsList, setElementsList] = useState('');

    const [message, setMessage] = useState('');

    
    useEffect(() => {
        if (elements && elements.length > 0) {
            setElementsList(elements.join(', '));
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
        console.log('element:', elementsList);
        console.log('qualities:', qualities);
    }, [dob, time, sex, driver_no, conductor_no, super_no, plane, elementsList, qualities]);

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

            setMessage('Data added successfully!');
            
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
