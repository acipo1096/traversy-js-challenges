// MY ATTEMPTS

// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return num;
//   }

//   return num * factorial(num - 1);
// }

// Shorter version
const factorial = (num) =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1);

module.exports = factorial;
