const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'))
// ➞ 'fail' -> se mueve pero no recoge nada

console.log(moveReno(board, 'U'))
// ➞ 'success' -> recoge algo (*) justo encima

console.log(moveReno(board, 'RU'))
// ➞ 'crash' -> choca contra un obstáculo (#)

console.log(moveReno(board, 'RRRUU'))
// ➞ 'success' -> recoge algo (*)

console.log(moveReno(board, 'DD'))
// ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log(moveReno(board, 'UUU'))
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log(moveReno(board, 'RR'))
// ➞ 'fail' -> se mueve pero no recoge nada

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const dir = { 'L': [-1, 0], 'R': [1, 0], 'U': [0, -1], 'D': [0, 1] };
  const b = board.split('\n').slice(1, -1).map(l => l.trim());
  
  if (!b.length) return 'fail';
  
  const findReno = () => {
    for (let i = 0; i < b.length; i++) {
      const idx = b[i].indexOf('@');
      if (idx !== -1) return { x: idx, y: i };
    }
    return null;
  };
  
  const pos = findReno();
  if (!pos) return 'fail';
  
  let { x, y } = pos;

  for (const m of moves) {
    x += dir[m][0];
    y += dir[m][1];
    
    if (x < 0 || x >= b[0].length || y < 0 || y >= b.length || b[y][x] === '#') return 'crash';
    if (b[y][x] === '*') return 'success';
  }

  return 'fail';
}