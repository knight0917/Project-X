
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

                console.log("success!!!")
            } catch (err) {
                setMessage(err.message);
            }
        };

        sendData();
    }, [inputDate, inputTime, sex, driverNo, conductorNo, superNo, plane, element, driverQualities]);

    return (
        <div>
            {message && <p className='text-purple-400 font-extrabold tracking-widest italic '>{message}</p>}
        </div>
    );
}

export default AllVariable;
