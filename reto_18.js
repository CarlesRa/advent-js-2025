console.log(
  hasFourInARow([
    ["R", ".", ".", "."],
    [".", "R", ".", "."],
    [".", ".", "R", "."],
    [".", ".", ".", "R"],
  ]),
)
// true → hay 4 luces rojas en diagonal ↘

console.log(
  hasFourInARow([
    [".", ".", ".", "G"],
    [".", ".", "G", "."],
    [".", "G", ".", "."],
    ["G", ".", ".", "."],
  ])
)
// true → hay 4 luces verdes en diagonal ↙

console.log(
  hasFourInARow([
    ["R", "R", "R", "R"],
    ["G", "G", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
  ]),
);
// true → hay 4 luces rojas en horizontal

console.log(
  hasFourInARow([
    ["R", "G", "R"],
    ["G", "R", "G"],
    ["G", "R", "G"],
  ]),
);
// false → no hay 4 luces del mismo color seguidas

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const rows = board.length;

  if (rows === 0) return false;
  
  const cols = board[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1]
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const color = board[r][c];
      if (color === '.') continue;

      for (const [dr, dc] of directions) {
        let count = 0;
        
        for (let i = 0; i < 4; i++) {
          const nextR = r + (dr * i);
          const nextC = c + (dc * i);

          if (
            nextR >= 0 && nextR < rows && 
            nextC >= 0 && nextC < cols && 
            board[nextR][nextC] === color
          ) {
            count++;
          } else {
            break; 
          }
        }

        if (count === 4) return true;
      }
    }
  }

  return false;
}
