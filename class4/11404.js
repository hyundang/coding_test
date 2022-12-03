let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
// let adj = Array.from({length:n+1}, () => new Array(n+1).fill(0))
let D = Array.from({ length: n }, () => new Array(n).fill(0));
input.slice(2, m + 2).forEach((info) => {
  const [u, v, w] = info.split(" ").map(Number);
  if (D[u - 1][v - 1] === 0 || D[u - 1][v - 1] > w) D[u - 1][v - 1] = w;
});

// console.log(D);

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (
        D[i][k] !== 0 &&
        D[k][j] !== 0 &&
        (D[i][j] === 0 || D[i][j] > D[i][k] + D[k][j])
      )
        D[i][j] = D[i][k] + D[k][j];
    }
  }
}

let answer = "";
D.forEach((d) => (answer += d.join(" ") + "\n"));
console.log(answer);
