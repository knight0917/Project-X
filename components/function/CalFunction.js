

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
    console.log("11day: "+ superNumber)
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


  // console.log('Day:', day, 'Month:', month, 'Year:', year);
  // console.log('Sum of day digits:', daySum);
  // console.log('Sum of month digits:', monthSum);
  // console.log('Sum of year digits:', yearSum);
  // console.log('Single digits from the date:', singleDigits);
  // console.log('Conductor no.:', addConductor);
  // console.log('Driver no.:', addDriver);
  // console.log('Super no.:', suNumber);
  

  
  return {addDriver, addConductor, suNumber, singleDigits}
}














export default user_input;