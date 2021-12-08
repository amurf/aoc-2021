const fs = require("fs");

module.exports.readInput = function (filename) {
  return fs.readFileSync(filename, "utf8").toString().replace(/\n$/, "");
};
