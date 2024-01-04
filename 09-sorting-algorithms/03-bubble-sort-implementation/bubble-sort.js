// Solution #1

/* const bubbleSort = (arr) => {
  // Outer loop that iterates through the array
  for (let i = 0; i < arr.length; i++) {
    // Use the inner loop for the swap
    for (let j = 0; j < arr.length - i - 1; j++) {
      // The -i will prevent us from going past what we need to
      // i.e. if the rest of the array is already swapped, why continue?
      
      // If curr element is greater than next element
      if (arr[j] > arr[j + 1]) {
      // Set temp to current
        const temp = arr[j]
        
      // Assign the current to the next position
      arr[j] = arr[j + 1]
      arr[j+1] = temp;
      }
     
    }
  }

return arr;
} */

// Solution #2

const bubbleSort = (arr) => {
    let swapped = false;
    while (!swapped) {
        swapped = true

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                // if we don't do this, we lose the first element
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = false;
            }
        }
    }

    return arr;
}

module.exports = bubbleSort;
