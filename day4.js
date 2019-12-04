let count = 0;
let isMono = n => n.toString().split('').every((e,i,a) => i === 0 || e >= a[--i]) 
let isAdj = n => n.toString().split('').some((e,i,a) => i > 0 && e === a[i-1] && c(i,a)) 
let c = (i,a) => !(a[i] === a[i+1] || a[i] === a[i-2]) 

for(let i=168630; i<=718098; i++) {
  if(isMono(i) && isAdj(i))
      count++
}

console.log({ count });

