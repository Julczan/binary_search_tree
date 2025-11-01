import Tree from "./binary-search-tree.js";

function getRandomNumsArr(number) {
  const arr = [];

  for (let i = 0; i < number; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    arr.push(randomNum);
  }

  return arr;
}

function driverScript() {
  const array = getRandomNumsArr(10);

  const test = new Tree(array);

  console.log("Is the tree balanced:");
  console.log(test.isBalanced());

  console.log("Level Order:");
  test.levelOrderForEach(test.printNode);

  console.log("PreOrder:");
  test.preOrderForEach(test.printNode);

  console.log("PostOrder:");
  test.postOrderForEach(test.printNode);

  console.log("InOrder:");
  test.inorderForEach(test.printNode);

  console.log("Inserting numbers over 100");

  test.insert(101);
  test.insert(120);
  test.insert(200);
  test.insert(115);
  test.insert(398);

  console.log("Is the tree balanced:");
  console.log(test.isBalanced());

  console.log("Calling the rebalance function");

  test.rebalance();
  console.log("Is the tree balanced:");
  console.log(test.isBalanced());

  console.log("Level Order:");
  test.levelOrderForEach(test.printNode);

  console.log("PreOrder:");
  test.preOrderForEach(test.printNode);

  console.log("PostOrder:");
  test.postOrderForEach(test.printNode);

  console.log("InOrder:");
  test.inorderForEach(test.printNode);
}

driverScript();
