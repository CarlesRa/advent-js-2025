const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

console.log(matchGloves(gloves))
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

console.log(matchGloves(gloves2))
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

console.log(matchGloves(gloves3))
// []

/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const counts = gloves.reduce((acc, glove) => {
    const { color, hand } = glove;
    if (!acc[color]) {
      acc[color] = { L:0, R: 0 };
    }
    acc[color][hand] += 1;
    return acc;
  }, {});

  let result = [];

  for (const color in counts) {    
    const countL = counts[color].L;
    const countR = counts[color].R;

    const pairs = Math.min(countL, countR);

    if (pairs <= 0) {
      continue;
    }

    result.push(...Array.from({ length: pairs }, () => color));
  }
  return result;
}