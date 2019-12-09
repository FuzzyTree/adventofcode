const fs = require("fs");

let input = fs.readFileSync("./day6.txt").toString().split('\n');
let planets = {}

const getPlanet = (planet,mom='') => {
  if (!(planet in planets))
    planets[planet] = { planet, mom }
  if(!planets[planet]['mom'] && mom)
    planets[planet]['mom'] = mom
}

input.forEach(orbit => {
  let [planet, orbiter] = orbit.split(')');
  let parentPlanet = getPlanet(planet)
  let orbiterPlanet = getPlanet(orbiter, planet)
})


let sum = 0;
Object.keys(planets).forEach(key => {
  let planet = planets[key];
  while (planet.mom) {
    sum++;
    console.log({ planet , sum })
    planet = planets[planet.mom];
  }
});

console.log({ planets, sum });

