const findMiddle = require('./find-middle');
const { LinkedList } = require('./linked-list');

// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);
// list.add(7);

// console.log(findMiddle(list));

const list = new LinkedList();
list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');
list.add('f');

const result = findMiddle(list);

console.log(result.data);