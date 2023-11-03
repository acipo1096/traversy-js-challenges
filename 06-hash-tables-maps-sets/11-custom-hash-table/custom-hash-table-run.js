const HashTable = require("./custom-hash-table");

const myHashTable = new HashTable();

// const result = myHashTable._hash("John", myHashTable.limit);
myHashTable.set("John", "555-234-3455");
myHashTable.set("James", "555-349-3948");
myHashTable.set("Sara", "555-469-3334");

console.log(myHashTable.get("John"));
console.log(myHashTable.get("Sara"));
console.log(myHashTable.get("test"));

myHashTable.remove("James");

console.log(myHashTable.has("James"));
console.log(myHashTable.has("John"));
console.log(myHashTable.get("James"));

myHashTable.clear();

myHashTable.printTable();

// console.log(result);
