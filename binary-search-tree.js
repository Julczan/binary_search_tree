class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(this.array);
    this.print = this.prettyPrint(this.root);
  }

  buildTree(array) {
    let uniq = [...new Set(array)];
    let sortedArr = uniq.sort((a, b) => {
      return a - b;
    });
    console.log(sortedArr);

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
      return;
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
}

// const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const test = new Tree(arr);
test.print;
