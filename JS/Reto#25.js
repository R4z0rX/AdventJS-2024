/*
Reto #25: 🪄 Ejecuta el lenguaje mágico

¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.
*/

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    let result = 0
    let idx = 0
    let ret = 0
    
    const instSet = {
        ">": () => "",
        "+": () => result++,
        "-": () => result--,
        "[": () => result === 0 ? idx = code.slice(idx).indexOf("]") + idx : ret = idx - 1,
        "]": () => idx = ret,
        "{": () => result === 0 ? idx = code.slice(idx).indexOf("}") + idx : "",
        "}": () => ""
    }

    while (idx < code.length) {
        let op = code[idx]
        
        if (result === undefined) result = 0
        instSet[op]()
        idx++
    }

    return result
}

// Tests
console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5
