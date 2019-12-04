const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split('\n');
let sum = 0;
while (input.length) {
  let mass = input.pop();
  if (mass) {
    mass = parseInt(mass,10);
    let fuel = Math.floor(mass/3)-2;
    if (fuel > 0) {
      input.push(fuel);
      sum += fuel;
    }
  }
}

console.log({ sum });
