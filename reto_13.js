/* console.log(
  runFactory([
    '>>.'
  ])
) // 'completed'

console.log(
  runFactory([
    '>>>'
  ])
) // 'broken'

console.log(
  runFactory([
    '>><'
  ])
) // 'loop'

console.log(
  runFactory([
    '>>v',
    '..<'
  ])
) // 'completed'

console.log(
  runFactory([
    '>>v',
    '<<<'
  ])
) // 'broken'

console.log(
  runFactory([
    '>v.',
    '^..'
  ])
) // 'completed'

console.log(
  runFactory([
    'v.',
    '^.'
  ])
) // 'loop' */

console.log(
  runFactory([
    '>>v',
    '..<'
  ])
)

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const handler = {
    '>': [1, 0],
    '<': [-1, 0],
    '^': [0, -1],
    'v': [0, 1],
    '.': [0, 0]
  }
  const lastPositions = [];
  let position = [0, 0];

  while (true) {
    if (!factory[position[1]] || !factory[position[1]].charAt(position[0])) {
      return 'broken';
    }

    const currentSymbol = factory[position[1]].charAt(position[0]);

    if (currentSymbol === '.') {
      return 'completed';
    }

    lastPositions.push([...position]);
    const movement = handler[currentSymbol];

    position[0] += movement[0];
    position[1] += movement[1];

    const isStart = position[0] === 0 && position[1] === 0;

    const isVisited = lastPositions.findIndex(p =>
      p[0] === position[0] && p[1] === position[1]
    ) !== -1;

    if (isStart || isVisited) {
      return 'loop';
    }
  }
}