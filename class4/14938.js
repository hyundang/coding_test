let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
const items = [0, ...input[1].split(" ").map(Number)];

let adj = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity));
input.slice(2).forEach((info) => {
  const [u, v, w] = info.split(" ").map(Number);
  adj[u][v] = w;
  adj[v][u] = w;
});

for (let k = 1; k <= n; k++) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j) continue;
      if (
        adj[i][k] !== 0 &&
        adj[k][j] !== 0 &&
        adj[i][j] > adj[i][k] + adj[k][j]
      )
        adj[i][j] = adj[i][k] + adj[k][j];
    }
  }
}

let max = 0;
for (let i = 1; i <= n; i++) {
  let cnt = 0;
  for (let j = 1; j <= n; j++) {
    if (i === j) {
      cnt += items[i];
      continue;
    }
    if (adj[i][j] <= m) {
      cnt += items[j];
    }
  }
  if (max < cnt) max = cnt;
}

console.log(max);
