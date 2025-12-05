const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if (size < 2) {
    return '';
  }

  const loops = size - 2;
  const border = `${symbol.repeat(size)}`;
  let gift = `${border}\n`;

  for (let i = 0; i < loops; i++) {
    gift += `${symbol}${' '.repeat(loops)}${symbol}\n`
  }
  gift += border
  return gift;
}