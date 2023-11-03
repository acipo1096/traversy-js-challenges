// Brad's Solution
function symmetricDifference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const result = [];

    for (const num of arr1) {
        if (!set2.has(num)) {
            result.push(num)
        }
    }

    for (const num of arr2) {
        if (!set1.has(num)) {
            result.push(num)
        }
    }

    console.log(result)
    return result;

}

// My attempt
// function symmetricDifference(arr1, arr2) {
//     const setArray = new Set();

//     for (const arr of arr1) {
//         setArray.add(arr)
//     }

//     for (const arr of arr2) {
//         if (setArray.has(arr)) {
//             console.log(setArray.has(arr))
//             setArray.delete(arr)
//             console.log(setArray)
//         } else {
//             setArray.add(arr)
//         }
//     }

//     const newArray = [...setArray]
//     console.log(newArray)
//     return newArray;
// }

module.exports = symmetricDifference;
