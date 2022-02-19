// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       '  ###  '
//       ' ##### '
//       '#######'
//   pyramid(5)
//       '     #     '
//       '    ###    '
//       '   #####   '
//       '  #######  '
//       ' ######### '
//       '###########'

function pyramid(n, steps = 0, pyramidStairs = '' ) {
    // -------- my solution ----------

    // steps = 0
    // let pyramidBase = ((2 * n) - 1);
    // let pyramidArray = new Array(pyramidBase).fill(' ');

    // let midpoint = Math.floor((pyramidArray.length / 2))

    // while (steps < n) {
    //     if (steps === 0) {
    //         pyramidArray[midpoint] = '#'
    //     } else {
    //         pyramidArray[midpoint - steps] = '#'
    //         pyramidArray[midpoint + steps] = '#'
    //     }
    //     steps++
    //     console.log(pyramidArray.join(''))
    // }

    // -------- my solution ----------



    if (steps === n) {
        return
    }

    if (pyramidStairs.length === 2*n - 1) {
        console.log(pyramidStairs)
        return pyramid(n, steps+1)
    }

    const midpoint = Math.floor((2*n -1)/2)


    if (midpoint - steps <= pyramidStairs.length && midpoint + row >= pyramidStairs.length) {
        
    }



}

pyramid(30)

module.exports = pyramid;
