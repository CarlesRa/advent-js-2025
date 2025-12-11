console.log(
  findUnsafeGifts([
    '.*.',
    '*#*',
    '.*.'
  ])
) // ➞ 0

// Todos los regalos están junto a una cámara

console.log(
  findUnsafeGifts([
    '...',
    '.*.',
    '...'
  ])
) // ➞ 1

// Este regalo no tiene cámaras alrededor

console.log(
  findUnsafeGifts([
    '*.*',
    '...',
    '*#*'
  ])
) // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

console.log(
  findUnsafeGifts([
    '.....',
    '.*.*.',
    '..#..',
    '.*.*.',
    '.....'
  ])
) // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara

/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let gifts = 0;
  const isColliding = (i, j) => {
    const deltas = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];

    for (const [di, dj] of deltas) {
      const ni = i + di;
      const nj = j + dj;

      if (warehouse[ni] && warehouse[ni].charAt(nj) === '#') {
        return true;
      }
    }
    return false;
  };
  
  for (let i = 0; i < warehouse.length; i++) {
    let j = -1;

    while ((j = warehouse[i].indexOf('*', j + 1)) !== -1) {
      if (!isColliding(i, j)) {
        gifts++;
      }
    }
  }

  return gifts;
}