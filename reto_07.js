console.log(drawTree(5, 'o', 2))
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

console.log(drawTree(3, '@', 3))
//   *
//  *@*
// *@**@
//   #

console.log(drawTree(4, '+', 1))
//    +
//   +++
//  +++++
// +++++++
//    #

/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  const fill = '*'; 
  let blank = height - 1;
  let resp = '';
  let repeat = 1;
  let count = 0;
  for (let i = 1; i <= height; i++) {
    resp += `${' '.repeat(blank)}`;
    for (let z = 0; z < repeat; z++) {
      count++
      resp += count % frequency === 0 ? ornament : fill;
    }
    resp += `\n`;
    blank--;
    repeat += 2;
  }
  resp += `${' '.repeat(height - 1)}${'#'}`
  return resp;
}