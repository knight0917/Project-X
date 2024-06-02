
// Function to split the date into day, month, and year
function splitDate(dateString) {

  const dateParts = dateString.split('-');
  const day = parseInt(dateParts[2]);
  const month = parseInt(dateParts[1]);
  const year = parseInt(dateParts[0]);

  return { day, month, year };
}

// Function to add separate digits of a number
function addDigits(number) {

  let sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}


//conductor number
function calConductor(daySum, monthSum, yearSum){
  let addconductor = daySum + monthSum + yearSum;
  while(addconductor >=10){
    addconductor = Math.floor(addconductor / 10) + (addconductor % 10)
  }
  return addconductor
}


//Driver number
function calDriver(daySum){
  let addDriver = daySum
  
  while(addDriver >= 10){
    addDriver = Math.floor(addDriver / 10) + (addDriver % 10)
  }
  return addDriver
}


//Super number
function superNumber(day){
  let superNumber='';
  if(day === 11){
    superNumber = day
  }else{
    console.log("no super no.")
  }
  return superNumber
}

// Function to display every single digit number from the date
function displaySingleDigits(dateString, addConductor, addDriver) {
  const digits = dateString.replace(/-/g, '').split('').map(Number);
  let remoZerDigit =  digits.filter(digit => digit >= 1 && digit <= 9); // Exclude zero
  let singleDigit = remoZerDigit.concat([addConductor, addDriver])
  // let singleDigit
  return singleDigit
}


//calculate planes
function activityPlanes(singleDigits){
  const success1Digits = singleDigits.includes(4) && singleDigits.includes(5) && singleDigits.includes(6);
  const mentalDigits = singleDigits.includes(4) && singleDigits.includes(9) && singleDigits.includes(2);
  const emotionalDigits = singleDigits.includes(3) && singleDigits.includes(5) && singleDigits.includes(7);
  const practicalDigits = singleDigits.includes(8) && singleDigits.includes(1) && singleDigits.includes(6);
  const success2Digits = singleDigits.includes(2) && singleDigits.includes(5) && singleDigits.includes(8);
  const actionDigits = singleDigits.includes(2) && singleDigits.includes(7) && singleDigits.includes(6);
  const willDigits = singleDigits.includes(9) && singleDigits.includes(5) && singleDigits.includes(1);
  const thoughtDigits = singleDigits.includes(4) && singleDigits.includes(3) && singleDigits.includes(8);
  
  let activePlanes = [];

  if (success1Digits) {
    activePlanes.push('Success Plane I');
  }
  if (mentalDigits) {
    activePlanes.push('Mental Plane');
  }
  if (emotionalDigits) {
    activePlanes.push('Emotional Plane');
  }
  if (practicalDigits) {
    activePlanes.push('Practical Plane');
  }
  if (success2Digits) {
    activePlanes.push('Success Plane II');
  }
  if (actionDigits) {
    activePlanes.push('Action Plane');
  }
  if (willDigits) {
    activePlanes.push('Will Plane');
  }
  if (thoughtDigits) {
    activePlanes.push('Thought Plane');
  }
  
  activePlanes.length > 0;

  let displayPlane = activePlanes.join(', ')

  return displayPlane
}


//calculate Elements
function Elements(singleDigits) {
  const water = singleDigits.includes(1);
  const earth = singleDigits.includes(2) && singleDigits.includes(5) && singleDigits.includes(8);
  const wood = singleDigits.includes(3) && singleDigits.includes(4);
  const metal = singleDigits.includes(6) && singleDigits.includes(7);
  const fire = singleDigits.includes(9);

  let activeElement = [];

  if (water) {
    activeElement.push('Water Elements');
  }
  if (earth) {
    activeElement.push('Earth Elements');
  }
  if (wood) {
    activeElement.push('Wood Elements');
  }
  if (metal) {
    activeElement.push('Metal Elements');
  }
  if (fire) {
    activeElement.push('Fire Elements');
  }

  activeElement.length > 0;

  let displayElement = activeElement.join(', ')

  console.log("Active Elements:", activeElement);

  return displayElement
}


//DriverQualities
function DriverQuality(addDriver) {
  let description = "";
  switch(addDriver) {
      case 1:
          description = "Leadership, independence, ambition, natural leaders, driven and independent.";
          break;
      case 2:
          description = "Balance, cooperation, diplomacy, value balance and harmony in relationships.";
          break;
      case 3:
          description = "Creativity, optimism, communication, creative, optimistic, and talented communicators.";
          break;
      case 4:
          description = "Stability, structure, practicality, value stability and structure in their lives, and are practical and dependable.";
          break;
      case 5:
          description = "Freedom, adventure, versatility, value freedom and adventure, and are versatile and adaptable.";
          break;
      case 6:
          description = "Harmony, nurturing, responsibility, value harmony and nurturing in relationships, and have a sense of responsibility towards others.";
          break;
      case 7:
          description = "Introspection, intution, wisdom, spiritual, and wise beyond their years.";
          break;
      case 8:
          description = "Success, power, wealth, value success and power, and have a talent for creating wealth and abundance.";
          break;
      case 9:
          description = "Compassion, humanitarianism, idealism, have a strong sense of compassion and humanitarianism, and may be driven by idealistic pursuits.";
          break;
      default:
          description = "Unknown driver number.";
          break;
  }
  return description
}


// Function to perform all tasks
function user_input(dateString) {
  const { day, month, year } = splitDate(dateString);
  const daySum = addDigits(day);
  const monthSum = addDigits(month);
  const yearSum = addDigits(year);
  const addConductor = calConductor(daySum, monthSum,yearSum)
  const addDriver = calDriver(day)
  const singleDigits = displaySingleDigits(dateString, addConductor, addDriver);
  const suNumber = superNumber(day)
  const disElements = Elements(singleDigits)
  const disPlane = activityPlanes(singleDigits)
  const DriverQual = DriverQuality(addDriver)


  // console.log('Day:', day, 'Month:', month, 'Year:', year);
  // console.log('Sum of day digits:', daySum);
  // console.log('Sum of month digits:', monthSum);
  // console.log('Sum of year digits:', yearSum);
  // console.log('Single digits from the date:', singleDigits);
  // console.log('Conductor no.:', addConductor);
  // console.log('Driver no.:', addDriver);
  // console.log('Super no.:', suNumber);
  // console.log(disPlane)
  // console.log("Elements::",disElements)
  // console.log("Driver quality::",DriverQual)
  

  
  return {addDriver, addConductor, suNumber, singleDigits, disPlane, disElements, DriverQual }
}














export default user_input;