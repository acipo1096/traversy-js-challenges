// My Attempt
// function wordFrequencyCounter(str) {
//     let lowerStr = str.toLowerCase();

//     const regex = lowerStr.split(/\b\W+\b/).filter(word => word !== '')

//     const strMap = new Map()

//     for (let i = 1; i < regex.length; i++) {
//         strMap.set(i, regex[i])
//     }

//     console.log(strMap)
// }

// const result = wordFrequencyCounter(
//     'The quick brown fox jumps over the lazy dog.'
// );

// console.log(result);

// Brad Solution
function wordFrequencyCounter(str) {
    const words = str.toLowerCase().split(/\W+/)

    const wordFrequency = new Map();

    for (const word of words) {
        if (word === '') continue;

        if (wordFrequency.has(word)) {
            wordFrequency.set(word, wordFrequency.get(word) + 1)
        }
        else {
            wordFrequency.set(word, 1);
        }
    }

    console.log(wordFrequency)
    return wordFrequency;
}

module.exports = wordFrequencyCounter;
