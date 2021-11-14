function kthSmallest(root) {
  let n = 0;
  let stack = [];
  while (stack.length > 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    n += 1;
    if (n === k) {
      return root.val;
    }
    root = root.right;
  }
}
