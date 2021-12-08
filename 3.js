const { readInput } = require("./helpers");

const input = readInput("3.input").split("\n");

console.log(partOne());
console.log(partTwo());

function partOne() {
  let counts = [];

  input.forEach((item) => {
    let bits = item.split("");
    for (let i = 0; i < bits.length; i++) {
      let bit = bits[i];
      counts[i] = counts[i] || 0;

      if (bit == 1) {
        counts[i] += 1;
      } else {
        counts[i] -= 1;
      }
    }
  });

  const gamma = counts.map((count) => (count > 0 ? 1 : 0)).join("");
  // bitwise or would be better here I believe, JS -_-
  const epsilon = counts.map((count) => (count > 0 ? 0 : 1)).join("");

  return parseInt(gamma, 2) * epsilon; //parseInt(epsilon, 2);
}

function partTwo() {
  const oxygen = findOxygenRating(input);
  const co2 = findCo2Rating(input);

  return parseInt(oxygen, 2) * parseInt(co2, 2);
}

function findOxygenRating(data) {
  return find(data, 0, (zeros, ones) =>
    ones.length >= zeros.length ? ones : zeros
  );
}

function findCo2Rating(data) {
  return find(data, 0, (zeros, ones) =>
    zeros.length <= ones.length ? zeros : ones
  );
}

function find(data, index, cmpFn) {
  if (data.length == 1) {
    return data.pop();
  }

  let zeros = [];
  let ones = [];

  for (let i = 0; i < data.length; i++) {
    let char = data[i].charAt(index);

    if (char == 1) {
      ones.push(data[i]);
    } else {
      zeros.push(data[i]);
    }
  }

  return find(cmpFn(zeros, ones), index + 1, cmpFn);
}
