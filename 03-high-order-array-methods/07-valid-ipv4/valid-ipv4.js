// My Attempt

/* const isValidIPv4 = (input) => {
  const check = input.split('.').every((check) => 
  check < 256 )
  
  
  console.log(check)
};
 */

// Brad Solution
const isValidIPv4 = (input) => {
    const octets = input.split('.')

    if (octets.length !== 4) {
        return false;
    }

    return octets.every((octet) => {
        const num = parseInt(octet)
        console.log(num)
        console.log(num.toString())
        return num >= 0 && num <= 255 && octet === num.toString()
    });
}

module.exports = isValidIPv4;
