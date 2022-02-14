// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    let strArray = str.split('')
    // ----- easy JS Methods -----
    // strArray = strArray.reverse()
    // return strArray.join('')
    // -----------------------------

    // -------- my solution ----------
    // let reverse = []
    // let len = (strArray.length) - 1
    // for (i = len + 1; i > 0; i--) {
    //     reverse.push(strArray[len])
    //     console.log(strArray[i], reverse)
    //     len --
    // }
    // return reverse.join('');


    //---------- ALGO CASTS SOLUTIO 1------------\\

    // let reversed = ''
    // for (char of str){
    //     console.log(`${char} + ${reversed}`)
    //     reversed = char + reversed;
    // }
    // return reversed
    
    //---------- ALGO CASTS SOLUTIO 1------------\\

    return str.split('').reduce((reduced, char)=> {
        console.log(`${char} + ${reduced} `)
        return  char + reduced
    }, '')

    //---------
}

reverse('hello')

module.exports = reverse;
