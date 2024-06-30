
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
  let superNumber=false;
  if(day === 11){
    superNumber = true
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

  // console.log("Active Elements:", activeElement);

  return displayElement
}


//DriverQualities
function DriverQuality(addDriver) {
  let description = "";
  switch(addDriver) {
      case 1:
          description = "Independent(sometimes lead to islolation), Ambitious(high ambitions and drive can lead to stress), Natural Leaders, Decisiveness, Business, Management, Entrepreneurship, possession of a strong sense of originality and creativity, Stub-born, overconfidence, Judgmental, dominance in relationship, Supportive partners, Communicative, Public speaking.";
          break;
      case 2:
          description = "Balance, Natural diplomats, sensitive and intuitive, empathic and caring, cooperation and team work, patience, Adaptability and flexibility, avoidance of conflict, romantic and loyal, diplomacy, value balance and harmony in relationships, supportive, inner contradiction or conflicting emotion, duality(which give them broader perspective of life).";
          break;
      case 3:
          description = "Creativity, expressive, optimism, communication, emotional depth, Teacher, optimistic, and talented communicators, Inspiring and Motivational, outwardly cheerful,  mood swings, overly affected by criticism.";
          break;
      case 4:
          description = "Loyal, Structure, practicality, value stability and structure in their lives, and are practical and dependable, Sharp memories, steadfast in their relationships and commitments, practical and realistic, Hard Work and Discipline, Detail-Oriented and analytical, Security-Seeking, Stubbornness.";
          break;
      case 5:
          description = "Adventurous and Freedom-Loving, Balance, Dynamic and Versatile(dynamic nature allows them to handle different tasks and challenges with ease), Curious and Inquisitive(always looking for new information), versatile and adaptable, Social(easily make friends) and Charismatic, Restless and Impulsive, may struggle with routine and commitment.";
          break;
      case 6:
          description = "Harmony, nurturing and care, responsibility, value harmony and nurturing in relationships, and have a sense of responsibility towards others, frequently involved in community service or roles that allow them to help those in need.";
          break;
      case 7:
          description = "Intellectual and Analytical, wisdom, Curiosity and Research-Oriented, spiritual, and wise beyond their years, Solitude and Independence, Mysterious Aura(may choose to keep their personal lives private), They question the status quo and are not easily swayed by popular opinion, Philosophical Mindset, Self-Sufficient and Resilient.";
          break;
      case 8:
          description = "Ambition and Determination, These individuals naturally possess leadership qualities, often seen in positions of authority and are capable of making tough decisions, Material success, power, wealth, value success and power, and have a talent for creating wealth and abundance, Discipline and Efficiency, demonstrate great resilience and inner strength, These individuals have a strong sense of fairness and often seek to bring harmony and balance to their surroundings, they may struggle with expressing emotions and might come across as reserved or distant.";
          break;
      case 9:
          description = "Strong sense of idealism and a vision for the future,  often seek to inspire and uplift others, aiming for a higher purpose in life, Fame, Compassion, humanitarianism, idealism, have a strong sense of compassion and humanitarianism, and may be driven by idealistic pursuits, strong appreciation for beauty and expression in various forms, whether it be art, music, or literature, Generous and Selfless, Intuitive and Spiritual, they are emotionally resilient and capable of dealing with life's challenges, Broad-Minded and Tolerant, Philosophical and Thoughtful, Magnetic and Charismatic, Overly Idealistic, Perfectionism.";
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