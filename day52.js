const fs = require("fs");
let input = fs.readFileSync("./day5.txt").toString().split(',');

const c = input => {
  let i = 0;
  while (i < input.length) {
    let jump = 1;
    let e = input[i].toString();
    let a = ~~input[i+1];
    let b = ~~input[i+2];
    let c = ~~input[i+3];
    let modes = [];

    if (e.length > 1) {
      opcode = e.substr(-2);
      modes = e.substr(0, e.length-2).split('').map(e => ~~e);
    } else opcode = e;

    opcode = ~~opcode

    while(modes.length < 3) modes.unshift(0);

    if (opcode != 3 && opcode != 4) {
      if (!modes[1]) b = ~~input[b];
      if (!modes[2]) a = ~~input[a];
    }

    switch(opcode) {
      case 1:
        jump+=3;
        input[c]=a+b;
        break;
      case 2:
        jump+=3;
        input[c]=a*b;
        break;
      case 3:
        jump++;
        input[a]=5
        break;
      case 4:
        jump++;
        console.log(input[a]);
        return;
        break;
      case 5:
        console.log({ a })
        if (a) {
          i=b-jump;
        } else jump+=2;
        break;
      case 6:
        if (!a) {
          i=b-jump;
        } else jump+=2;
        break;
      case 7:
        jump += 3;
        input[c] = (a<b) ? 1 : 0;
        break;
      case 8:
        jump += 3;
        input[c] = (a==b) ? 1 : 0;
        break;
      default:
        console.log({ opcode });
        console.log("Invalid opcode!"); 
      case 99:
        i=input.length+1;
    }
    i+=jump;
    console.log({ input })
  }
  return ~~input[0];
}

c(input);
