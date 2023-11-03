// Brad Solution #1
// function findMissingLetter(arr) {

//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const startIndex = alphabet.indexOf(arr[0]);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== alphabet[startIndex + i]) {
//             console.log(alphabet[startIndex + i])
//             return alphabet[startIndex + i];
//         }
//     }

//     console.log('')
//     return '';
// }
// module.exports = findMissingLetter;

// Brad Solution #2

// Brad Solution #2
function findMissingLetter(arr) {
    let start = arr[0].charCodeAt(0);

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i].charCodeAt(0);

        if (current - start > 1) {
            console.log(String.fromCharCode(start + 1))
            return String.fromCharCode(start + 1);
        }

        start = current;
    }
    console.log('')
    return '';
}
module.exports = findMissingLetter;