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
  const moveHandler = {
    'L': (point) => point.x--,
    'R': (point) => point.x++,
    'U': (point) => point.y--,
    'D': (point) => point.y++,
  }
  
  const isValidPosition = (pos) =>
    pos.x >= 0 &&
    pos.x < boardArray[0].length &&
    pos.y >= 0 &&
    pos.y < boardArray.length;

  const reindeer = '@';
  const obstacle = '#';
  const trash = '*';

  const boardArray = board.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  let vectorY = -1;
  let vectorX = -1;
  for (let y = 0; y < boardArray.length; y++) {
    const x = boardArray[y].indexOf(reindeer);
    if (x !== -1) {
      vectorX = x;
      vectorY = y;
      break;
    }
  }
  
  let position = { x: vectorX, y: vectorY };
  for (const move of moves) {
    moveHandler[move](position);
    if (
      !isValidPosition(position) ||
      boardArray[position.y].charAt(position.x) === obstacle
    ) {
      return 'crash';
    }
    if (boardArray[position.y].charAt(position.x) === trash) {
      return 'success';
    }
  }
  return 'fail';
}