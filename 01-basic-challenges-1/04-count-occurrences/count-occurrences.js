// function countOccurrences(str,char) {
//     let count = 0;

//     for (let i = 0;i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log('Huhhhhhhhhhhhh?')

countOccurrences = (str, char) => str.split(char).length - 1;
// splits the string into an array at a given character
// console.log(str.split(char).length - 1);
// Since this is a one-line arrow function, we can do what's called an "implicit return"
// We can get rid of "return" and the curly braces to make this more concise

module.exports = countOccurrences;
