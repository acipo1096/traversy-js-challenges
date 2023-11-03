// function findFirstNonRepeatingCharacter(str) {
//     const charCount = {};
//     // as each character repeats, the value of a given key will increment

//     for (const char of str) {
//         charCount[char] = (charCount[char] || 0) + 1; 

//         console.log(charCount);
//     }

//     // We have to put the if statement in another for loop
//     // This loops AFTER the entire object is created
//     // Otherwise, the function will return the first char with count of 1
//     // Even if it repeats

//     for (const char of str) {
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }

//     return null;
// }

// module.exports = findFirstNonRepeatingCharacter;

function findFirstNonRepeatingCharacter(str) {
    const charCount = new Map;

    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);

        console.log(charCount);
    }

    // We have to put the if statement in another for loop
    // This loops AFTER the entire object is created
    // Otherwise, the function will return the first char with count of 1
    // Even if it repeats

    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    return null;
}

module.exports = findFirstNonRepeatingCharacter;