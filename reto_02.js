const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)

/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of
 */
function manufactureGifts(giftsToProduce) {  
  const validGiftsToProduce = giftsToProduce?.filter(g => g.quantity > 0);
  const gifts = [];
  validGiftsToProduce.forEach(v => {
    gifts.push(...Array.from({ length: v.quantity }, () => v.toy));
  });
  return gifts;
}