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
  let steps = 0;
  while (planet.mom) {
    planet = planets[planet.mom];
    steps++;
  }
  planets[key].steps = steps
  sum += steps;
});

let destination = planets[planets['SAN']['mom']]; 
let start = planets[planets['YOU']['mom']];
let startPath = {};
let planet = start

while (planet && planet.planet && planet.planet !== destination.planet) {
  startPath[planet.planet] = planet;
  planet = planets[planet.mom]
}

planet = destination
let lowest = false;

distance = (a,b) => a-b

while (planet && planet.planet) {
  if (planet.planet in startPath && (planet.steps < lowest || !lowest)) {
      console.log({ startPath, planet })
      lowest = planet.steps;
      break;
  }
  planet = planets[planet.mom]
}

distance = start.steps - lowest + destination.steps - lowest;
console.log({ distance });

