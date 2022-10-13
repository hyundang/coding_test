let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync('예제.txt')
  .toString()
  .split("\n")
  .map((e) => e.replace(/\r/g, ""));
// console.log(input)

let [n, m] = input[0].split(' ').map((e)=>+e);

let ans = [];
if(n > m) {
    let noSee = {}
    for(let i=n+1; i<input.length; i++) {
        noSee[input[i]] = i;
    }   
    for(let i=1; i<n+1; i++) {
        if(noSee[input[i]]) ans.push(input[i]);
    }
    // console.log(noSee)
} else {
    let noHear = {}
    for(let i=1; i<n+1; i++) {
        noHear[input[i]] = i;
    }
    for(let i=n+1; i<input.length; i++) {
        if(noHear[input[i]]) ans.push(input[i]);
    }
    // console.log(noHear)

}

console.log(ans.length);
ans.sort().forEach((e)=>console.log(e));