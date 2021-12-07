const { readInput } = require("./helpers");

const input = readInput("1.input");
const inputArray = input.split("\n");

console.log(partOne());
console.log(partTwo());

function partOne() {
  let increasingCount = 0;

  for (let i = 1; i < inputArray.length - 1; i++) {
    if (inputArray[i] > inputArray[i - 1]) {
      increasingCount++;
    }
  }

  return increasingCount;
}

function partTwo() {
  let increasingCount = 0;

  for (let i = 0; i < inputArray.length - 2; i++) {
    // less efficient but clearer code
    let current = sumNextThree(inputArray, i);
    let next = sumNextThree(inputArray, i + 1);

    if (next > current) {
      increasingCount++;
    }
  }

  return increasingCount;
}

function sumNextThree(array, index) {
  return array
    .slice(index, index + 3)
    .reduce((a, b) => parseInt(a) + parseInt(b));
}
