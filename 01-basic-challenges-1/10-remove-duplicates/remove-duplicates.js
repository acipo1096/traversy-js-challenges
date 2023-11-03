// BRAD SOLUTION #2

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;

// BRAD SOLUTION #1

// function removeDuplicates(arr) {
//     const uniqueArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i])
//         }
//     }
//     return uniqueArr
// }

// removeDuplicates([1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 6]);

// YOUR ATTEMPT

// function removeDuplicates(arr) {
//     const newArr = [arr[0]];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[i - 1]) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }

// removeDuplicates([1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 6]);
