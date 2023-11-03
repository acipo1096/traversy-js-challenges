function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [endNum];
  }

  const numbers = numberRange(startNum, endNum - 1);

  // This is the part I had trouble with figuring out
  numbers.push(endNum);
  return numbers;
}

module.exports = numberRange;
