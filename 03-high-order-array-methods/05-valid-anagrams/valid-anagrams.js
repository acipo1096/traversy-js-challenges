// Brad Solution
function validAnagrams(str1, str2) {
    freqCount1 = str1.split('').reduce((acc, char) => {
        // Puts a 1 if char not there and increments it if it is
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {})

    freqCount2 = str2.split('').reduce((acc, char) => {
        // Puts a 1 if char not there and increments it if it is
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {})

    // extracts keys which are characters
    // every loops through the keys
    return Object.keys(freqCount1).every((char) => freqCount1[char] === freqCount2[char])
}

module.exports = validAnagrams;