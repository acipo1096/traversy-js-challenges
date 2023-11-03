// Brad Solution #2

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersectionArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }
  return intersectionArr;
}

module.exports = arrayIntersection;

// Brad Solution #1

// function arrayIntersection(arr1, arr2) {
//   const intersectionArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
//       // We want to make sure the value already isn't in the intersectionArr
//       intersectionArr.push(arr1[i]);
//     }
//   }

//   return intersectionArr;
// }

// module.exports = arrayIntersection;

// My Solution
// function arrayIntersection(arr1, arr2) {
//   const mergedArray = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       mergedArray.push(arr1[i]);
//     }
//   }

//   return mergedArray;
// }

// module.exports = arrayIntersection;
