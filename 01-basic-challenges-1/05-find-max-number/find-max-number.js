// BRAD SOLUTION #@2

function findMaxNumber(arr) {
    let max = arr[0];

    // We start the for loop at the 2nd element
    // cuz we already set the first as the largest
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}

findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6])

module.exports = findMaxNumber;

// BRAD SOLUTION #1

// From ChatGPT: The spread operator (...) is used to exapnd elements from an iterable such as an array or object into another array, object, or function call
// It's a CONCISE WAY TO MERGE OR COPY ELEMENTS, or PASS ARGUMENTS TO FUNCTIONS

// function findMaxNumber(arr) {
//   return Math.max(...arr)
// }

// findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6])

// module.exports = findMaxNumber;

// MY ATTEMPT WHICH ALSO WORKS
// function findMaxNumber(arr) {
//     let largest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6])

// module.exports = findMaxNumber;