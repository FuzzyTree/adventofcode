const fs = require("fs");
input = fs.readFileSync("./day8.txt").toString().trim();
let min = false;
let minLayer = false;

const wide = 25;
const tall = 6;
const layerSize = wide * tall;;
const countDigits = (layer,digit) => layer.split('').reduce((s,e) => e === digit ? s+1 : s, 0)

for (i=0; i<input.length; i+=layerSize) {
  let layer = input.substr(i,layerSize);
  let zeros = countDigits(layer,'0'); 

  if (min === false || min > zeros) {
    min = zeros;
    minLayer = layer;
  }
}

let ones = countDigits(minLayer,'1'); 
let twos = countDigits(minLayer,'2'); 
let result = ones * twos;

console.log({ ones, twos, result, min, minLayer });
