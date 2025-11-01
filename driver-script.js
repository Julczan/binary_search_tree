import Tree from "./binary-search-tree.js";

function getRandomNumsArr(number) {
  const arr = [];

  for (let i = 0; i < number; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    arr.push(randomNum);
  }

  return arr;
}

const array = getRandomNumsArr(10);

const test = new Tree(array);

test.prettyPrint(test.root);
