// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    arr = str.split('');
    map = {}
    arr.map((val, i) => {
        count = 1
        if (!map[val]) {
            map[val] = count
        }
        else {
            map[val] += count
        }
    })
    let maxVal = '';

    max = Object.entries(map).reduce((highest, val) => {
        console.log(maxVal, highest, val[0])
        if (val[1] > highest) {
            highest = val[1]
            maxVal = val[0]
        }
        return maxVal
    }, 0)

    return max

}

console.log(maxChar("abcccccccd"))

module.exports = maxChar;
