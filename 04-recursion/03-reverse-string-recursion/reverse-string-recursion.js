function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    console.log(str.charAt(0));
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// Shorter version
// const reverseString = (str) =>
//   str === "" ? "" : reverseString(str.substring(1)) + str.charAt(0);

module.exports = reverseString;
