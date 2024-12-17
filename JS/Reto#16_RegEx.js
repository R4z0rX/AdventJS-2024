/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    const regex = /(.)\1/g

    while (regex.test(s)) {
        let matches = s.match(regex)

        for (let m of matches) {
            s = s.replace(m, "")
        }
    }

    return s
}
