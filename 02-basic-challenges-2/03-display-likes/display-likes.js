function displayLikes(names) {
  let likes = names.length;
  let response = "";

  if (likes === 0) {
    response = `no one likes this`;
  } else if (likes === 1) {
    response = `${names[0]} likes this`;
  } else if (likes === 2) {
    response = `${names[0]} and ${names[1]} like this`;
  } else if (likes === 3) {
    response = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (likes > 3) {
    response = `${names[0]}, ${names[1]} and ${
      names.length - 2
    } others like this`;
  } else {
    response = "Please enter a valid array of names";
  }

  console.log(response);
  return response;
}

// displayLikes(['John', 'Paul', 'George', 'Ringo', 'George Martin', 'Glyn Johns']);
module.exports = displayLikes;
