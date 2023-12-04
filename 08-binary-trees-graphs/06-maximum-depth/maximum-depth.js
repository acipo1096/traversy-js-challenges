class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (!root) return [];

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1; // +1 to count the root node
}

module.exports = {
  maxDepth,
  Node,
};
