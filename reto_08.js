console.log(findUniqueToy('Gift')) // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

console.log(findUniqueToy('sS')) // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

console.log(findUniqueToy('reindeeR')) // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
console.log(findUniqueToy('AaBbCc')) // ''
console.log(findUniqueToy('abcDEF')) // 'a'
console.log(findUniqueToy('aAaAaAF')) // 'F'
console.log(findUniqueToy('sTreSS')) // 'T'
console.log(findUniqueToy('z')) // 'z'

/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  const toyArray = Array.from(toy);
  for (const char of toyArray) {
    const firstOcurrence = toyArray.findIndex(c => c.toUpperCase() === char.toUpperCase());
    const lastOcurrence = toyArray.findLastIndex(c => c.toUpperCase() === char.toUpperCase());
    if (firstOcurrence === lastOcurrence) {
      return char;
    }
  }
  return '';
}