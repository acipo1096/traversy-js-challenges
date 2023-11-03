function formatPhoneNumber(numbers) {
  // Brad Solution #1 - prefers #1 because it's more readable
  const areaCode = numbers.slice(0, 3).join("");
  console.log(areaCode);
  // console.log before the join
  const prefix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6).join(""); // gives us from 6 on
  return `(${areaCode}) ${prefix}-${lineNumber}`;
  // Brad Solution #2
  // const formatted = numbers.join('');
  // return `(${formatted.substring(0,3)} ${formatted.substring(3,6)}-${formatted.substring(6)})`
  // Brad Solution #3
  // const formatPhoneNumber = (numbers) => `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

module.exports = formatPhoneNumber;
