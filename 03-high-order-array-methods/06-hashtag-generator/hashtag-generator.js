// Brad Solution #1

/* function generateHashtag(str) {
  // check if empty string
  if (str.trim() === '') {
    return false;
  }
 
   // regex represents one or more whitespace characters
  // more accurate than passing in ' '
  const words = str.trim().split(/\s+/);
  console.log(words)
  
  const capitalizedWords = words.map((word) => 
    word.charAt(0).toUpperCase() + word.slice(1))
console.log(capitalizedWords)

const hashtag = '#' + capitalizedWords.join('')

console.log(hashtag)
return hashtag.length > 140 ? false : hashtag;

} */

// Brad Solution #2

function generateHashtag(str) {
    const hashtag = str.split(' ').reduce((tag, word) => {
        return tag + word.charAt(0).toUpperCase() + word.substring(1)
    }, '#');

    return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;

}

module.exports = generateHashtag;
