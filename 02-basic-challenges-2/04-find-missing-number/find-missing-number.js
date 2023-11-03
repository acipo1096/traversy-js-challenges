// // Brad Solution # 1
// function findMissingNumber(arr) {
//   if (arr.length === 0) return 1;

//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   let actualSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }

//   return expectedSum - actualSum;
// }

// Brad Solution # 2
// function findMissingNumber(arr) {
//   if (arr.length === 0) return 1;

//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;

//   let actualSum = arr.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// }

// My Solution
function findMissingNumber(arr) {
  if (arr == []) {
    return 1;
  } else if (arr === undefined) {
    throw new Error("undefined");
  } else {
    let numSum = 0;
    let n = arr.length + 1;
    numSum = (n * (n + 1)) / 2;

    console.log(numSum);

    let sumOfArray = 0;
    for (let i = 0; i < arr.length; i++) {
      sumOfArray += arr[i];
    }

    console.log(sumOfArray);

    console.log(numSum - sumOfArray);
    return numSum - sumOfArray;
  }
}

module.exports = findMissingNumber;
