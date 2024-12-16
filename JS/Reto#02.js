/*
Reto #2: 🖼️ Enmarcando nombres

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    let n = [...names]
    let maxLen = n.sort((a, b) => b.length - a.length)[0].length + 4
    let r = "*".repeat(maxLen) + "\n"

    names.forEach(e => r += `* ${e}${" ".repeat(maxLen - e.length - 3)}*` + "\n")

    r += "*".repeat(maxLen)

    return r
}

// Tests
createFrame(['midu', 'madeval', 'educalvolpz'])

/* Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

createFrame(['midu'])

/* Resultado esperado:
********
* midu *
********
*/

createFrame(['a', 'bb', 'ccc'])

/* Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******
*/

createFrame(['a', 'bb', 'ccc', 'dddd'])

/* Resultado esperado:
********
* a    *
* bb   *
* ccc  *
* dddd *
********
*/
