// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {

    // -------- my solution ----------
                    // let newArr = [];
                    // let len = array.length;
                    // while (array.length > 0) {
                    //     splice = array.splice(0, (size));
                    //     newArr.push(splice)
                    // }
                    // console.log(newArr)
                    // return (newArr)
    // -------- my solution ----------

    // -------- Algo Casts Solution 1----------

    let chunked = []; 

    for (let element of array) {
        let last = chunked[chunked.length -1];
        console.log(last, chunked, element)
        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }

    // -------- Algo Casts Solution----------
    return chunked
}

chunk([1, 2, 3, 4, 5], 2)
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)


module.exports = chunk;
