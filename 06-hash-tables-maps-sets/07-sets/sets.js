const nameSet = new Set(['John', 'Jane', "Joe", "John"]);
/* console.log(nameSet); */

// Sets are ALWAYS unique - putting a duplicate name above doesn't display

nameSet.add('Jack');
nameSet.add('Jill');
console.log(nameSet);

// Check for values
console.log(nameSet.has('Jack'));
console.log(nameSet.has('Brad'));

// Get size
console.log(nameSet.size);

// Get values
console.log(nameSet.values);

// A Map is similar to a JS object
// A Set is similar to a JS array

for (const name of nameSet) {
    console.log(name);
}

// Convert to array
const nameArray = [...nameSet]
console.log(nameArray)

// Clear set
nameSet.clear();

console.log(nameSet.size);