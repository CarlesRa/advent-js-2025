console.log(
  hasFourLights([
    ['.', '.', '.', '.', '.'],
    ['R', 'R', 'R', 'R', '.'],
    ['G', 'G', '.', '.', '.']
  ])
)
// true → hay 4 luces rojas en horizontal

console.log(
  hasFourLights([
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.']
  ])
)
// true → hay 4 luces verdes en vertical

console.log(
  hasFourLights([
    ['R', 'G', 'R'],
    ['G', 'R', 'G'],
    ['G', 'R', 'G']
  ])
)
// false → no hay 4 luces del mismo color seguidas

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {

  if (board.length === 0) return false;

  const rows = board.length;
  const cols = board[0].length;

  const hasSequence = (arr) => {
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== '.' && arr[i] === arr[i - 1]) {
        count++;
        if (count === 4) return true;
      } else {
        count = 1;
      }
    }
    return false;
  };

  for (let i = 0; i < rows; i++) {
    if (hasSequence(board[i])) return true;
  }

  for (let j = 0; j < cols; j++) {
    const column = [];
    for (let i = 0; i < rows; i++) {
      column.push(board[i][j]);
    }
    if (hasSequence(column)) return true;
  }

  return false;
}