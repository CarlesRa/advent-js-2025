console.table(
  dropGifts(
    [
      ['.', '.', '.'],
      ['.', '#', '.'],
      ['#', '#', '.']
    ],
    [0]
  )
)
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

console.table(
  dropGifts(
    [
      ['.', '.', '.'],
      ['#', '#', '.'],
      ['#', '#', '#']
    ],
    [0, 2]
  )
)
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

console.table(
  dropGifts(
    [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.']
    ],
    [0, 1, 2]
  )
)
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/

console.table(
  dropGifts(
    [
      ['#', '#'],
      ['#', '#']
    ],
    [0, 0]
  )
)

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {

  if (!warehouse) return warehouse

  const resp = [...warehouse];
  
  drops.forEach(drop => {
    for (let i = resp.length - 1; i >= 0; i--) {
      if (resp[i][drop] === '.') {
        resp[i][drop] = '#';
        break
      }
    }
  });

  return resp;
}