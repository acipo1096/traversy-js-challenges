const Stack = require("./stack");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraversal() {}

module.exports = {
  Node,
  depthFirstTraversal,
};
