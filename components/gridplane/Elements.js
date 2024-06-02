import { useState, useEffect} from "react";


function Elements({ singleDigits }) {
    const [selectedElements, setSelectedElements] = useState([]);
  
    useEffect(() => {
      if (!Array.isArray(singleDigits)) {
        console.error('singleDigits is not an array');
        return;
      }
  
      const elementsMap = {
        1: 'Water Element',
        2: 'Earth Element',
        3: 'Wood Element',
        4: 'Wood Element',
        5: 'Earth Element',
        6: 'Metal Element',
        7: 'Metal Element',
        8: 'Earth Element',
        9: 'Fire Element'
      };
  
      const elements = singleDigits.reduce((acc, digit) => {
        const element = elementsMap[digit];
        if (element && !acc.includes(element)) {
          acc.push(element);
        }
        return acc;
      }, []);
  
      setSelectedElements(elements);
    }, [singleDigits]);
    console.log("fvsv:::::",singleDigits)
    return selectedElements
  }

  export default Elements;