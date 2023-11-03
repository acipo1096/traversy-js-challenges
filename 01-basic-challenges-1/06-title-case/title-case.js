function titleCase(str) {

    // split the string into an array of words
    // separated by space
    const words = str.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        // We set the first letter of each word in the array to an uppercase
        // We then slice the rest of the word starting at 1
        // The index of 1 indicates where to start the shallow copy (the second letter)

        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }


    // Put this back to a string by the space
    console.log(words.join(' '));
    return words.join(' ');
}

module.exports = titleCase;
