const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 * - This actually returns something, a new array
 * - You pass in an arrow function with at least one argument, which is whatever you want to 
 *   call each element in the existing array
 * - You can also pass in other arguments, such as the index
 * - Only need parenthesis if you just pass in num
 * - Implicit returns are allowed
 */

// Ex: double each number
const doubledNumbers = numbers.map((num, index, arr) => {
    // console.log(index)
    // console.log(arr)
    return num * 2;
})

// console.log(doubledNumbers);


/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 * - This does NOT affect or change the original array. It creates a new array.
 */

const evenNumbers = numbers.filter((num) => {
    // returns even numbers only
    // return num % 2 === 0;

    // return numbers greater than 2
    return num > 2;
})

// console.log(evenNumbers);
// console.log(numbers)

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 * - Great for things like shopping carts - adding all items together
 * - Takes in two arguments: An accumulator (can be called anything), which is the number you keep adding to
 *   and the 2nd argument is a num (whatever you want to call it) that represents the elements in the array
 */


// I can also change where I want the accumulator to start, or the initialValue
const sum = numbers.reduce((total, num) => {
    return total + num;
}, 15)

// console.log(sum);


/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 * - A shorter way for looping through an array than using a for or while loop
 */

numbers.forEach((num)=> {
    // console.log(num);
})

// num replaces "a[i]"


 /**
 * find: Returns the first array element that satisfies a specified condition.
 * - Does NOT return a whole array, just the first element. In the below case, a number
 */

 const foundNumber = numbers.find((num) => num > 2);

//  console.log(foundNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 * - returns a boolean
 */

 const hasEvenNumber = numbers.some((num) => num % 2 === 0);

//  console.log(hasEvenNumber);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const allNumsGreaterThanZero = numbers.every((num) => num > 0);

console.log(allNumsGreaterThanZero);
