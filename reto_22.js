console.log(
  canEscape([
    ['S', '.', '#', '.'],
    ['#', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['#', '#', '#', 'E']
  ])
)
// → true

console.log(
  canEscape([
    ['S', '#', '#'],
    ['.', '#', '.'],
    ['.', '#', 'E']
  ])
)
// → false

console.log(
  canEscape([['S', 'E']])
)
// → true

console.log(
  canEscape([
    ['S', '.', '.', '.', '.'],
    ['#', '#', '#', '#', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '#', '#', '#', '#'],
    ['.', '.', '.', '.', 'E']
  ])
)
// → true

console.log(
  canEscape([
    ['S', '.', '.'],
    ['.', '.', '.'],
    ['#', '#', '#'],
    ['.', '.', 'E']
  ])
)
// → false

/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {

  const rows = maze.length;
  const cols = maze[0].length;
  let startPos = null;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (maze[r][c] === 'S') {
        startPos = [r, c];
        break;
      }
    }
    if (startPos) break;
  }

  if (!startPos) return false;

  const queue = [startPos];
  const visited = new Set([`${startPos[0]},${startPos[1]}`]);
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    if (maze[r][c] === 'E') return true;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      const posId = `${nr},${nc}`;

      const isInside = nr >= 0 && nr < rows && nc >= 0 && nc < cols;
      
      if (isInside && maze[nr][nc] !== '#' && !visited.has(posId)) {
        visited.add(posId);
        queue.push([nr, nc]);
      }
    }
  }

  return false;
}

