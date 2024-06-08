// Define module-level variables to act as static variables
let staticInputDate = null;
let staticInputTime = null;
let staticSex = null;

let staticAddDriver = null;
let staticAddConductor = null;
let staticSuNumber = null;

let staticDisPlane = null;
let staticDisElements = null;
let staticDriverQual = null;

export default function StaticVariable({ inputDate, inputTime, sex, driverNo, conductorNo, superNo, plane, element, driverQualities }) {
  
  // Assign values to the static variables
  staticInputDate = inputDate;
  staticInputTime = inputTime;
  staticSex = sex;

  staticAddConductor = driverNo;
  staticAddDriver = conductorNo;
  staticSuNumber = superNo;
  
  staticDisPlane = plane;
  staticDisElements = element;
  staticDriverQual = driverQualities;

  console.log(staticInputDate);
  console.log(staticInputTime);
  console.log(sex);

  console.log(staticAddConductor);
  console.log(staticAddDriver);
  console.log(staticSuNumber);

  console.log(staticDisPlane);
  console.log(staticDisElements);
  console.log(staticDriverQual);

  // Return the values as an object
  return {
    dateInput: staticInputDate,
    timeInput: staticInputTime,
    sex: staticSex,

    conductor: staticAddConductor,
    driver: staticAddDriver,
    suNumber: staticSuNumber,

    plane: staticDisPlane,
    elements: staticDisElements,
    driverQual: staticDriverQual
  };
}
