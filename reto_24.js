const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

console.log(isTreesSynchronized(tree1, tree3)) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

console.log(isTreesSynchronized(tree1, tree4)) // [false, '🎄']

console.log(
  isTreesSynchronized(
    { value: '🎅' },
    { value: '🧑‍🎄' }
  )
) // [false, '🎅']

console.log(
  isTreesSynchronized(
    { value: '🎄', left: { value: '⭐' } },
    { value: '🎄', right: { value: '⭐' } }
  )
) // [true,"🎄"]

/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {

  if (!tree1 && !tree2) return [true, null];

  if (!tree1 || !tree2 || tree1.value !== tree2.value) {
    return [false, tree1?.value ?? null];
  }

  const [leftSync] = isTreesSynchronized(tree1.left, tree2.right);

  const [rightSync] = isTreesSynchronized(tree1.right, tree2.left);

  const synchronized = leftSync && rightSync;

  return [synchronized, tree1.value];
}