/* console.table(
  clearGifts(
    [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['#', '.', '#']
    ],
    [1]
  )
) */
/*
1. El regalo cae en la columna 1
2. La fila 2 se convierte en [# # #].
3. La fila 2 está completa, el robot la limpia.
6. Se añade una nueva fila vacía en la posición 0.

Resultado:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
*/

console.table(
  clearGifts(
    [
      ['.', '.', '#'],
      ['#', '.', '#'],
      ['#', '.', '#']
    ],
    [0, 1, 2]
  )
)

/*
1. El regalo cae en la columna 0
2. El regalo cae en la columna 1
3. La fila 2 se convierte en [# # #]
4. La fila 2 está completa, el robot la limpia

Por ahora queda así:
[
  ['.', '.', '.']
  ['#', '.', '#'],
  ['#', '.', '#'],
]

5. El regalo cae en la columna 2

Resultado:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
*/



/**
* @param {string[][]} warehouse
* @param {number[]} drops
* @returns {string[][]}
*/
function clearGifts(warehouse, drops) {
  if (!warehouse) return warehouse

  let resp = [...warehouse];

  drops.forEach(drop => {
    for (let i = resp.length - 1; i >= 0; i--) {
      if (resp[i][drop] === '.') {
        resp[i][drop] = '#';
        if (resp[i].every(r => r === '#')) {
          resp.unshift(Array.from({ length: resp[i].length }, () => '.'))
          resp = resp.toSpliced(i + 1, 1)
        }
        break
      }
    }
  });

  return resp;
}