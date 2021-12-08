const { readInput } = require("./helpers");

const input = readInput("6.input")
  .split(",")
  .map((i) => parseInt(i));

// global for max possible lifespan of fish
var MAX_DAY = 9; // 0 is counted as a day + 1-8

console.log(partOne());
console.log(partTwo());

function partOne() {
  return simulateDays(input, 18);
}

function partTwo() {
  return simulateDays(input, 256);
}

function initCounts(fish) {
  let fishTracker = new Array(MAX_DAY).fill(0);

  for (let i = 0; i < fish.length; i++) {
    const fishDay = fish[i];
    fishTracker[fishDay]++;
  }

  return fishTracker;
}

function simulateDays(fish, days) {
  let fishTracker = initCounts(fish);

  for (let day = 1; day <= days; day++) {
    newFish = fishTracker[0];

    for (let j = 1; j < MAX_DAY; j++) {
      fishTracker[j - 1] = fishTracker[j];
    }

    fishTracker[6] += newFish;
    fishTracker[8] = newFish;
  }

  return fishTracker.reduce((accum, next) => (accum += next));
}
