console.log(maxDepth('[]')) // -> 1
console.log(maxDepth('[[]]')) // -> 2
console.log(maxDepth('[][]')) // -> 1
console.log(maxDepth('[[][]]')) // -> 2
console.log(maxDepth('[[[]]]')) // -> 3
console.log(maxDepth('[][[]][]')) // -> 2

console.log(maxDepth('][')) // -> -1 (cierra antes de abrir)
console.log(maxDepth('[[[')) // -> -1 (faltan cierres)
console.log(maxDepth('[]]]')) // -> -1 (sobran cierres)
console.log(maxDepth('[][][')) // -> -1 (queda uno sin cerrar)

/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let depth = 0
  let max = 0

  for (const c of s) {
    if (c === '[') {
      depth++
      if (depth > max) max = depth
    } else if (c === ']') {
      depth--
      if (depth < 0) return -1
    }
  }

  return depth === 0 ? max : -1
}