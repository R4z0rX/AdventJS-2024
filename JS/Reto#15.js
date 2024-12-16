/*
Reto #15: ✏️ Dibujando tablas

Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
*/

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    const columns = Object.keys(data[0]).map(key => key)
    const columnWidths = columns.map(column => {
        return Math.max(column.length, ...data.map(item => {
            return item[column].toString().length
        }))
    })

    const separator = () => {
        return "+" + columns.map((_, i) => "-".repeat(columnWidths[i] + 2)).join("+") + "+"
    }

    const row = (item) => {
        return "|" + columns.map((column, i) => " " + item[column] + " ".repeat(columnWidths[i] - (item.hasOwnProperty(column) ? item[column].toString().length : 0))).join(" |") + " |"
    }

    let table = separator() + "\n"

    columns.forEach(item => {
        table += "| " + item.charAt(0).toUpperCase() + item.slice(1) + " ".repeat(columnWidths[columns.indexOf(item)] - item.length + 1)
    })

    table += "|\n" + separator() + "\n"

    data.forEach(item => {
        table += row(item) + "\n"
    })

    table += separator()
    
    return table
}

// Tests
console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ]))
  // +---------+-----------+
  // | Name    | City      |
  // +---------+-----------+
  // | Alice   | London    |
  // | Bob     | Paris     |
  // | Charlie | New York  |
  // +---------+-----------+
  
  console.log(drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
  ]))
  // +----------+----------+
  // | Gift     | Quantity |
  // +----------+----------+
  // | Doll     | 10       |
  // | Book     | 5        |
  // | Music CD | 1        |
  // +----------+----------+