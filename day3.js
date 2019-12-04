const fs = require("fs");

let [wire1, wire2] = fs.readFileSync("./input.txt").toString().split('\n');
let grid = new Map();
let x=0;
let y=0;
let steps=0;

wire1.split(',').forEach(vector => {
  let direction = vector[0];
  let distance = vector.slice(1);
  while (distance--) {
    switch(direction) {
      case 'L':
        x--;
        break;
      case 'U':
        y++;
        break;
      case 'R':
        x++;
        break;
      case 'D':
        y--;
        break;
    }
    grid.set(`${x},${y}`,++steps)
  }
})

lowest = false;
lowestX = false;
lowestY = false;

const mdistance = (x,y) => Math.abs(x) + Math.abs(y)
x=0;
y=0;
steps=0;

wire2.split(',').forEach(vector => {
  let direction = vector[0];
  let distance = ~~vector.slice(1);
  while (distance--) {
    steps++;
    switch(direction) {
      case 'L':
        x--;
        break;
      case 'U':
        y++;
        break;
      case 'R':
        x++;
        break;
      case 'D':
        y--;
        break;
    }
    let key = `${x},${y}`;
    if (grid.has(key)) {
      console.log({ x , y })
      let m = grid.get(key) + steps;
      if (lowest === false || m < lowest) {
        lowest = m;
        lowestX = x;
        lowestY = y;
      }
    }
  }
})


console.log({ lowest, lowestX, lowestY })
