const fs = require("fs");

const c = input => {
  let keepgoing = true;
  for (let i=0; i<input.length; i+=4) {
    let e = ~~input[i];
    let a = ~~input[i+1];
    let b = ~~input[i+2];
    let c = ~~input[i+3];
    switch(e) {
      case 1:
        input[c]=~~input[a]+~~input[b];
        break;
      case 2:
        input[c]=~~input[a]*~~input[b];
        break;
      case 99:
        keepgoing = false;
    }
    if (!keepgoing) break;
  }
  return ~~input[0];
}

for (let i=0; i<100; i++) {
  for (let j=0; j<100; j++) {
    let input = fs.readFileSync("./input.txt").toString().split(',');
    input[1]=i;
    input[2]=j;
    let z = c([...input]);
    if (z == 19690720) {
      console.log({ i, j});
      break;
    }
  }
}

