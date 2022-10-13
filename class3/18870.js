let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt").toString().split("\n");

let N = Number(input[0]);
input = input[1].split(" ").map((e) => +e);
let sorted = [...input].sort((a, b) => a - b);

let sequence = {};
let idx = 0;
for (let i = 0; i < N; i++) {
  if (sequence[sorted[i]]===undefined) {
    sequence[sorted[i]] = idx;
    idx++;
  }
}

let ans = [];
for(let i=0; i<N; i++) {
    ans.push(sequence[input[i]]);
}

// console.log(sequence)
console.log(ans.join(' '));
