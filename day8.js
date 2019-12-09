const fs = require("fs");
input = fs.readFileSync("./day8.txt").toString().trim();
let min = false;
let minLayer = false;

const wide = 25;
const tall = 6;
const layerSize = wide * tall;;
const countDigits = (layer,digit) => layer.split('').reduce((s,e) => e === digit ? s+1 : s, 0)

let layers = [];
for (i=0; i<input.length; i+=layerSize) {
  let layer = input.substr(i,layerSize);
  layers.push(layer);
}

let visible = layers[0].split('')

for (let layer of layers) {
  for (i=0; i<layer.length; i++) {
    if (visible[i] === '2') {
      visible[i] = layer[i];
    }
  }
}

visible = visible.join('').replace(/0/g,' ');

for (i=0; i<visible.length; i+=wide) {
  console.log(visible.substr(i,wide))
}
