/*
Reto #6: 📦 ¿Regalo dentro de la caja?

Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
*/

/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let r = false

    box.slice(1, -1).every(s => {
        if (s.includes("*")) {
            if (s.startsWith("#") && s.endsWith("#")) {
                r = true
                return false
            }
        }
        return true
    })

    return r
}

// Tests
console.log(inBox([
    "###",
    "#*#",
    "###"
])) // ➞ true
  
console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
])) // ➞ true
  
console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
])) // ➞ false
  
console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
])) // ➞ false
