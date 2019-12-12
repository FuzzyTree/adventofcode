const fs = require('fs');

let moons = [
  {
    id: 1,
    position: {x: -1, y:7 ,z:3},
    velocity: {x: 0, y:0 ,z:0},
  },
  {
    id: 2,
    position: {x: 12, y:2, z:-13},
    velocity: {x: 0, y:0, z:0},
  },
  {
    id: 3,
    position: {x: 14, y:18 ,z:-8},
    velocity: {x: 0, y:0 ,z:0},
  },
  {
    id: 4,
    position: {x: 17, y:4 ,z:-4},
    velocity: {x: 0, y:0 ,z:0},
  },
];

/*
moons = [
  {
    id: 1,
    position: {x: -1, y:0 ,z:2},
    velocity: {x: 0, y:0 ,z:0},
  },
  {
    id: 2,
    position: {x: 2, y:-10, z:-7},
    velocity: {x: 0, y:0, z:0},
  },
  {
    id: 3,
    position: {x: 4, y:-8 ,z:8},
    velocity: {x: 0, y:0 ,z:0},
  },
  {
    id: 4,
    position: {x: 3, y:5,z:-1},
    velocity: {x: 0, y:0 ,z:0},
  },
];


let energy = moons => moons.reduce((energy, moon) => {
  let pot = Object.keys(moon.position).reduce((s,e) => s+Math.abs(moon.position[e]), 0)
  let kin = Object.keys(moon.velocity).reduce((s,e) => s+Math.abs(moon.velocity[e]), 0)
  energy += pot * kin;
  return energy;
}, 0);
*/

let state = moons => JSON.stringify(moons)
let firstState = state(moons);
i=0;
found = false;
while (!found) {
  // gravity
  for (let moon of moons) {
    for (let otherMoon of moons) {
      if (moon.id != otherMoon.id) {
        for (let v of ['x','y','z']) {
          if (moon.position[v] > otherMoon.position[v]) {
            moon.velocity[v]--
          } else if (moon.position[v] < otherMoon.position[v]) {
            moon.velocity[v]++;
          }
        }
      }
    }
  }

  // velocity
  for (moon of moons) {
    for (v of ['x','y','z']) {
      moon.position[v] += moon.velocity[v];
    }
  }

  let newState = state(moons);
  if (newState == firstState) {
    console.log({ i })
    found = true;
  }
  if (i % 10000000 == 0) {
    console.log(i)
  }
  i++
}
