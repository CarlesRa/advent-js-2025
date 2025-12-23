console.log(
  minStepsToDeliver([
    ['S', '.', 'G'],
    ['.', '#', '.'],
    ['G', '.', '.']
  ])
)
// Resultado: 4

/* 
Explicación:
- Distancia mínima de S (0,0) a G (0,2): 2 pasos
- Distancia mínima de S (0,0) a G (2,0): 2 pasos
- Total: 2 + 2 = 4
*/

console.log(
  minStepsToDeliver([
    ['S', '#', 'G'],
    ['#', '#', '.'],
    ['G', '.', '.']
  ])
)
// Resultado: -1
// (La casa en (0,2) es inalcanzable por los obstáculos)

console.log(minStepsToDeliver([['S', 'G']]))
// Resultado: 1

/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const rows = map.length;
  const cols = map[0].length;
  let startPos = null;
  const giftsPositions = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 'S') startPos = [r, c];
      if (map[r][c] === 'G') giftsPositions.push([r, c]);
    }
  }

  if (!startPos) return -1;

  const getDistance = (start, target) => {
    let queue = [[start[0], start[1], 0]];
    let visited = new Set([`${start[0]},${start[1]}`]);
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length > 0) {
      const [r, c, dist] = queue.shift();

      if (r === target[0] && c === target[1]) return dist;

      for (const [dr, dc] of directions) {
        const nr = r + dr, nc = c + dc;
        const posId = `${nr},${nc}`;

        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && 
            map[nr][nc] !== '#' && !visited.has(posId)) {
          visited.add(posId);
          queue.push([nr, nc, dist + 1]);
        }
      }
    }
    return null;
  };

  let totalSteps = 0;
  for (const giftPos of giftsPositions) {
    const steps = getDistance(startPos, giftPos);

    if (steps === null) return -1;

    totalSteps += steps; 
  }

  return totalSteps;
}