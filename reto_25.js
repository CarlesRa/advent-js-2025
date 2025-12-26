console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let result = 0;
  let pointer = 0;
  const jumps = new Map();
  const stack = [];

  code.split('').forEach((char, i) => {
    "[{".includes(char) && stack.push(i);
    if ("]}".includes(char)) {
      const open = stack.pop();
      jumps.set(open, i);
      jumps.set(i, open);
    }
  });

  const actions = {
    '+': () => result++,
    '-': () => result--,
    '[': () => result === 0 && (pointer = jumps.get(pointer)),
    ']': () => result !== 0 && (pointer = jumps.get(pointer)),
    '{': () => result === 0 && (pointer = jumps.get(pointer))
  };

  const tokens = code.split('');
  while (pointer < tokens.length) {
    const action = actions[tokens[pointer]];
    action?.();
    pointer++;
  }

  return result;
}