// Brad Solution

function fizzBuzzArray(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }

  console.log(arr);
  return arr;
}

// My Attempt
// This does technically work, but I was supposed to pass a num param
// and the array would loop up to a number
// function fizzBuzzArray() {
//   const numArr = [];

//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       numArr.push("FizzBuzz");
//     } else if (i % 3 == 0) {
//       numArr.push("Fizz");
//     } else if (i % 5 == 0) {
//       numArr.push("Buzz");
//     } else {
//       numArr.push(i);
//     }
//   }

//   console.log(numArr);
//   return numArr;
// }

module.exports = fizzBuzzArray;
