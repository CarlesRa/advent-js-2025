console.log(elfBattle('A', 'B'))
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

console.log(elfBattle('F', 'B'))
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

console.log(elfBattle('AAB', 'BBA'))
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

console.log(elfBattle('AFA', 'BBA'))
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

console.log(elfBattle('AFAB', 'BBAF'))
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

console.log(elfBattle('AA', 'FF'))
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2

/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  const size = Math.max(elf1.length, elf2.length)
  let elf1Life = 3
  let elf2Life = 3
  const handler = (turn) => {
    const map = {
      'AA': [-1, -1],
      'BB': [0, 0],
      'AB': [0, 0],
      'BA': [0, 0],
      'FA': [-1, -2],
      'AF': [-2, -1],
      'FB': [0, -2],
      'BF': [-2, 0],
      'FF': [-2, -2]
    };
    return map[turn];
  }
  for (let i = 0; i < size; i++) {
    const roundResult = handler(`${elf1.charAt(i)}${elf2.charAt(i)}`)
    elf1Life += roundResult[0]
    elf2Life += roundResult[1]
    if (elf1Life <= 0 || elf2Life <= 0) {
      break
    }

  }
  return elf1Life === elf2Life ? 0 : elf1Life > elf2Life ? 1 : 2
}