const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

console.log(findGiftPath(workshop, 'train'))
// ➜ ['storage', 'shelf', 'box1']

console.log(findGiftPath(workshop, 'switch'))
// ➜ ['storage', 'shelf', 'box2']

console.log(findGiftPath(workshop, 'car'))
// ➜ ['storage', 'box']

console.log(findGiftPath(workshop, 'doll'))
// ➜ ['gift']

console.log(findGiftPath(workshop, 'plane'))
// ➜ []

/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  for (const key of Object.keys(workshop)) {
    const value = workshop[key];

    if (value === gift) {
      return [key];
    }

    if (typeof value === 'object') {
      const subPath = findGiftPath(value, gift);

      if (subPath.length > 0) {
        subPath.unshift(key);
        return subPath;
      }
    }
  }

  return [];
}