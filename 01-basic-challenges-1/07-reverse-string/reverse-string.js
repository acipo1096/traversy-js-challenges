// BRAD'S SOLUTION #1

// function reverseString(str) {
//     console.log(str.split('').reverse().join(''));
//     return str.split('').reverse().join('');
// }

// module.exports = reverseString;

// BRAD SOLUTION #1a - IMPLICIT RETURN

// reverseString = (str) => str.split('').reverse().join('')

// MY ATTEMPT THAT WORKS
function reverseString(str) {
  let str2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  console.log(str2);
  return str2;
}

// reverseString('racecar spelled backwards is racecar')

module.exports = reverseString;
