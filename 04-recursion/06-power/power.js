// My solution, which works, but I don't get why
// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }

//   if (exponent >= 1) {
//     console.log(`base is ${base}`);
//     console.log(`exponent is ${exponent}`);
//     return base * power(base, exponent - 1);
//   }
// }

// Brad's Solution
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1); // I got it!
}

module.exports = power;
