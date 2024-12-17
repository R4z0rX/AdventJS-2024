/*
Reto #17: 💣 Busca las bombas del Grinch

l Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉
*/

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ]

    function countAdjacentBombs(r, c) {
        let count = 0

        for (let [dr, dc] of directions) {
            let nr = r + dr
            let nc = c + dc

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc]) {
                count++
            }
        }
        return count
    }

    let result = Array.from({ length: rows }, () => Array(cols).fill(0))

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            result[r][c] = countAdjacentBombs(r, c)
        }
    }

    return result
}

// Tests
console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]))
  // [
  //   [1, 2, 1],
  //   [2, 1, 1],
  //   [1, 1, 1]
  // ]
  
  console.log(detectBombs([
    [true, false],
    [false, false]
  ]))
  // [
  //   [0, 1],
  //   [1, 1]
  // ]
  
  console.log(detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ]))

  // [
  //   [1, 1],
  //   [4, 4],
  //   [1, 1]
  // ]