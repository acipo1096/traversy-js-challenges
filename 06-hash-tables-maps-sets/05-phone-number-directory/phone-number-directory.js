// My Solution
// function phoneNumberDirectory(numbers) {
//     const phoneMap = new Map();

//     for (const number of numbers) {
//         const indNumber = number.split(':')

//         phoneMap.set(indNumber[0], indNumber[1])
//     }

//     console.log(phoneMap)
//     return phoneMap

// }

// Brad Solution
function phoneNumberDirectory(phoneNumbers) {
    const directory = new Map();

    for (const entry of phoneNumbers) {
        // Destructuring
        const [name, phone] = entry.split(':')

        directory.set(name, phone)
    }

    console.log(directory)
    return directory

}

module.exports = phoneNumberDirectory;
