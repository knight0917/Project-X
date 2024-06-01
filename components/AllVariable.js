import React, { useEffect } from 'react';

export default function Allvariable({inputDate, inputTime, gender, driver, conductor, superNo, description, elements}){
    let date = inputDate
    console.log(date)

    let time = inputTime
    console.log(time)
    
    let testgender = gender
    console.log(testgender)
    
    let testdriver = driver
    console.log(testdriver)
    
    let testconductor = conductor
    console.log(testconductor)
    
    let testsuper = superNo
    console.log(testsuper)
    
    if(description){
    console.log(description)
    }

    useEffect(() => {
        if (elements && elements.length > 0) {
            let element = elements.join(', ');
            console.log(element);
          }
        }, [elements]);


}
