// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // -------- my solution ----------
    // let arr = n
    //     .toString()
    //     .split('');
    // if (Math.sign(n) === -1) {
    //     let sign = arr.shift()
    //     let num = parseInt(arr.reverse().join(''))
    //     console.log(n, Math.sign(n) * num)
    //     return Math.sign(n) * num;
    // } else {
    //     return parseInt(arr.reverse().join(''));
    // }

    // -------- my solution ----------

    // -------- Algo Casts Solution----------

    let reversed = parseInt(n
        .toString()
        .split('')
        .reverse()
        .join(''));

    return Math.sign(n) * reversed;

    // -------- Algo Casts Solution----------
}

module.exports = reverseInt;
