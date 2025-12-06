const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff));
// 30

// justo en el momento exacto
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff));
// 0

// 12 segundos después del despegue
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff));
// -12

/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {  
  const convertToDate = (value) => {
    let valueToConvert = value.split('NP')[0].trim().replaceAll('*', '-');
    valueToConvert = valueToConvert.replaceAll('@', 'T');
    valueToConvert = valueToConvert.replaceAll('|', ':');
    valueToConvert += 'Z';
    return new Date(valueToConvert);    
  } 
  const takeOfDate = convertToDate(takeOffTime);
  const fromDate = convertToDate(fromTime);
  const result = Math.floor((takeOfDate - fromDate) / 1000);
  return result;
}