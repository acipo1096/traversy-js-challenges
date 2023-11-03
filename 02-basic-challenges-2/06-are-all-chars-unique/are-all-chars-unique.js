// Brad Solution #1
// function areAllCharactersUnique(str) {
//     const charCount = {};

//     // loop through the string
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         console.log(char);

//         if (charCount[char]) {
//             return false;
//         }

//         // adds each iteration to the charCount and
//         // sets the value to true
//         charCount[char] = true;
//         console.log(charCount);
//     }

//     return true;
// }

// module.exports = areAllCharactersUnique;

// Brad Solution #2
function areAllCharactersUnique(str) {
    const charSet = new Set();

    // loop through the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        console.log(char);

        if (charSet.has(char)) {
            return false;
        }

        // adds each iteration to the charCount and
        // sets the value to true
        charSet.add(char)
        console.log(charSet);
    }

    return true;
}

module.exports = areAllCharactersUnique;