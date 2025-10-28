class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(this.array);
  }

  buildTree(array) {
    let uniq = [...new Set(array)];
    let sortedArr = uniq.sort((a, b) => {
      return a - b;
    });

    return this.arrToBST(sortedArr, 0, sortedArr.length - 1);
  }

  arrToBST(array, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new Node(array[mid]);

    root.left = this.arrToBST(array, start, mid - 1);
    root.right = this.arrToBST(array, mid + 1, end);

    return root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return null;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(value, root = this.root) {
    if (root === null) {
      root = new Node(value);
      return root;
    }
    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else {
      root.right = this.insert(value, root.right);
    }
    return root;
  }

  deleteItem(value, root = this.root) {
    if (root === null) return root;

    if (root.data > value) {
      root.left = this.deleteItem(value, root.left);
    } else if (root.data < value) {
      root.right = this.deleteItem(value, root.right);
    } else {
      if (root.left === null) {
        root = root.right;
        return root;
      }
      if (root.right === null) {
        root = root.left;
        return root;
      }

      const succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this.deleteItem(succ.data, root.right);
    }
    return root;
  }

  getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
      curr = curr.left;
    }
    return curr;
  }

  find(value, root = this.root) {
    if (root === null) return root;

    if (value > root.data) return this.find(value, root.right);
    if (value < root.data) return this.find(value, root.left);

    return root;
  }

  printNode(result) {
    console.log(result);
  }

  levelOrderForEachIter(callback, root = this.root) {
    if (!callback) throw new Error("Callback is required");
    if (root === null) return;

    const queue = [];
    const res = [];

    queue.push(root);

    while (queue.length > 0) {
      root = queue.shift();
      res.push(root.data);
      if (root.left !== null) queue.push(root.left);
      if (root.right !== null) queue.push(root.right);
    }

    callback(res);
  }

  inorderForEach(callback, root = this.root) {
    if (!callback) throw new Error("Callback is required");

    if (root === null) return;

    this.inorderForEach(callback, root.left);
    callback(root.data);
    this.inorderForEach(callback, root.right);
  }

  preOrderForEach(callback, root = this.root) {
    if (!callback) throw new Error("Callback is required");

    if (root === null) return;

    callback(root.data);
    this.preOrderForEach(callback, root.left);
    this.preOrderForEach(callback, root.right);
  }

  postOrderForEach(callback, root = this.root) {
    if (!callback) throw new Error("Callback is required");

    if (root === null) return;

    this.postOrderForEach(callback, root.left);
    this.postOrderForEach(callback, root.right);
    callback(root.data);
  }

  getHeight(root, h = 0) {
    if (root === null) return h - 1;

    return Math.max(
      this.getHeight(root.left, h + 1),
      this.getHeight(root.right, h + 1)
    );
  }

  height(value) {
    if (!this.find(value)) {
      return null;
    }

    const node = this.find(value);

    return this.getHeight(node);
  }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const arr = [1, 2, 3, 4, 5, 6, 7];

const test = new Tree(arr);

console.log(test.height(67));

test.prettyPrint(test.root);
