// My Solution
// function sumOfEvenSquares(arr) {
//   const filteredArray = arr.filter((num) => {
//     return num % 2 === 0;
//   });

//   console.log(filteredArray);

//   const mappedArray = filteredArray.map((num) => {
//     return Math.pow(num, 2);
//   });

//   console.log(mappedArray);

//   const reducedArray = mappedArray.reduce((total, num) => {
//     return total + num;
//   });

//   console.log(typeof reducedArray);
//   return reducedArray;
// }

// Brad's Solution
function sumOfEvenSquares(number) {
  const evenSquares = number
    .filter((num) => num % 2 === 0)
    // We will not get the original array here since we're chaining
    .map((num) => num ** 2)
    .reduce((sum, square) => sum + square, 0);

  return evenSquares;
}

module.exports = sumOfEvenSquares;
