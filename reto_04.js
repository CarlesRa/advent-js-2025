console.log(decodeSantaPin('[1++][2-][3+][<]'))
// "3144"

console.log(decodeSantaPin('[9+][0-][4][<]'));
// "0944"

console.log(decodeSantaPin('[1+][2-]'));
// null (solo 2 dígitos)

/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  let lastNumber;
  const operations = {
    '+': (num) => (num += 1) %10,
    '-': (num) => (num -= 1) < 0 ? 10 + num : num,
    '<': () => lastNumber 
  }  
  const array = Array.from(code);  
  let index = -1;
  const acumulator = []
  for (let c of array) {
    const number = Number(c)    
    if (!isNaN(number)) {
      index += 1;
      acumulator[index] = number;      
      continue;
    }
    if (c === '[' || c === ']') {
      continue;
    }
    lastNumber = acumulator[index];
    if (c === '<') {
      index += 1
    }
    acumulator[index] = operations[c](acumulator[index]);
  }
  if (acumulator.length < 4) {
    return null;
  }
  return acumulator.join('');
}