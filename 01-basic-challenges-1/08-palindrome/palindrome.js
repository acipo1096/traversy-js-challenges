// Brad Solution #2
// Uses helper functions

function isPalindrome(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
  const reversedStr = reverseString(formattedStr);
  return formattedStr === reversedStr;
}

function removeNonAlphaNumeric(str) {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase a-z
  );
}

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

isPalindrome("amanapanama!@@#$");

// Brad Solution #1
// Uses regex

// function isPalindrome(str) {
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = formattedStr.split('').reverse().join('');
//     console.log(reversedStr === formattedStr)

//     return reversedStr === formattedStr
// }

// isPalindrome('amanapanama!@@#$')

// MY SOLUTION
// Problem is you forgot the constraints

// function isPalindrome(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     if (str == reversed) {
//         console.log(true)
//         return true;
//     }
//     else {
//         console.log(false)
//         return false;
//     }
// }

// isPalindrome('bachelor')

module.exports = isPalindrome;
