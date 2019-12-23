const fs = require("fs");
let lines = fs.readFileSync("./day22.txt")
  .toString()
  .trim()
  .split("\n")

let deck = [];
for (i=0; i<10007; i++) {
  deck.push(i);
}

for (line of lines) {
  if (r = line.match(/cut (-?\d+)/)) {
    n = ~~r[1];
    if (n >= 0) {
      deck = deck.slice(n).concat(deck.slice(0, n));
    } else {
      deck = deck.slice(n).concat(deck.slice(0, deck.length - Math.abs(n)));
    }
  } else if (r = line.match(/deal with increment (\d+)/)) {
    n = ~~r[1];
    let i = 0;
    let copy = [...deck];
    let len = deck.length;
    while (deck.length) {
      e = deck.shift();
      copy[i] = e;
      i += n;
      if (i >= len) {
        i -= len;
      }
    }
    deck = copy;
  } else if (line.match(/deal into new stack/)) {
    deck.reverse(); 
  } else {
    console.log('INVALID INPUT'); 
    break;
  }
}

console.log(deck.indexOf(2019))
