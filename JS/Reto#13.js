/*
Reto #13: 🤖 ¿El robot está de vuelta?

Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L significa RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Debes devolver:

true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
*/

/** @param {string[]} moves
 * @returns {true|string[]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    let newmoves = ""
    let i = x = y = 0
    const changes = {U: "D", D: "U", R: "L", L: "R"}
    while (i < moves.length) {
        let move = moves[i]
        switch (move) {
            case "*":
                newmoves += moves[i + 1]
                break
            case "!":
                let tmp = moves[i + 1]
                newmoves += changes[tmp]
                i++
                break
            default:
                newmoves += move
        }
        i++
    }
    while (newmoves.includes("?")) {
        let idx = newmoves.indexOf("?")
        let v = newmoves.substring(idx, idx + 2)
        let tmp = newmoves.slice(0, idx)
        if (!tmp.includes(v[1])) {
            newmoves = newmoves.replace(v, v[1])
        } else {
            newmoves = newmoves.replace(v, "")
        }
    }
    const op = {
        R: () => y++,
        L: () => y--,
        U: () => x++,
        D: () => x--
    }
    for (const m of newmoves) op[m]()
    return x === 0 && y === 0 || [y, x]
}

// Tests
console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('R!U?U')) // [1,0] 
