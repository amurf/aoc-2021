const { readInput } = require("./helpers");

const input = readInput("2.input").split("\n");

console.log(partOne());
console.log(partTwo());

function partOne() {
  let pos = {
    up: 0,
    down: 0,
    forward: 0,
  };

  input.forEach((row) => {
    let [command, distance] = row.split(" ");
    pos[command] += parseInt(distance);
  });

  let x = pos.forward;
  let y = pos.down - pos.up;

  return x * y;
}

function partTwo() {
  let submarine = {
    _aim: 0,
    _x: 0,
    _y: 0,

    up(num) {
      this._aim -= num;
    },

    down(num) {
      this._aim += num;
    },

    forward(num) {
      this._x += num;
      this._y += this._aim * num;
    },
  };

  input.forEach((row) => {
    let [command, distance] = row.split(" ");
    submarine[command](parseInt(distance));
  });

  return submarine._x * submarine._y;
}
