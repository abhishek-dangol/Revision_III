function levelOrderTraversal(root) {
  if (root === null) {
    return [];
  }
  const result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(currLevel);
  }
  return result;
}
