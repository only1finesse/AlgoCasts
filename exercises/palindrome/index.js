// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const reverse = require("../reversestring");

function palindrome(str) {
    // -------- my solution ----------

    // let reverse = str.split('').reduce((rev, char) => {
    //     console.log(`${char} + ${rev} `)
    //     return char + rev
    // }, '')
    // if ( str === reverse) {
    //     return true
    // }
    // return false

    // -------- my solution ----------


    // -------- my solution 2 ----------
    // let arr = str.split('')
    // let len = arr.length - 1
    // let isPalindrome 

    // for (i = 0; i < Math.floor(arr.length); i++) {
    //     if (arr[i] != arr[len]) {
    //         isPalindrome = false; 
    //         len--
    //         break
    //     } else {
    //         isPalindrome = true
    //         len--

    //     }
    // }
    // return isPalindrome

    // --------my solution 2 ----------

    //---------- ALGO CASTS SOLUTIO 1------------\\
    return str.split('').every((char, i) => {
        console.log(char, str[str.length - 1], str[str.length - i - 1] )
        return char === str[str.length - i - 1]
    })
    //---------- ALGO CASTS SOLUTIO 1------------\\
}

palindrome("abba")

module.exports = palindrome;
