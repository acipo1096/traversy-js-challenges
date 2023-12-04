const { Node, BinarySearchTree } = require("./binary-search-tree");

// Create a binary search tree:
//       10
//      /  \
//     5    15
//    /
//   2

// Video 1

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);

// Uncomment last to test removal
// bst.remove(5);

// reveal for testing
bst.printTree();
// When you test, should be, vertically, 2,5,10,15

// Video 2
console.log(bst.lookup(15));
console.log(bst.lookup(10));
