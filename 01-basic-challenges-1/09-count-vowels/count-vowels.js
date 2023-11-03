// Brad's Solution

function countVowels(str) {
    const formattedStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < formattedStr.length; i++) {
        const char = formattedStr[i];

        if (char === 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }

    return count;
}

module.exports = countVowels;

// MY SOLUTION

// function countVowels(str) {
//     let str = str.toLowerCase();
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             count++;
//         }
//     }
//     return count
// }

// countVowels('Mississipi')
// module.exports = countVowels;
