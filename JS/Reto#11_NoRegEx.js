/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    let parts = filename.split('_')

    if (parts.length < 2) return ''

    let rest = parts.slice(1).join('_')
    let dotIdx = rest.indexOf('.')

    if (dotIdx === -1) return ''

    return rest.slice(0, rest.indexOf('.', dotIdx + 1))
}
  
  // Tests
  console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa')); // ➞ "sleighDesign.png"
  console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'));       // ➞ "chimney_dimensions.pdf"
  console.log(decodeFilename('987654321_elf-roster.csv.tempfile'));        // ➞ "elf-roster.csv"
  