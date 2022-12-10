let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const tc = Number(input[0]);
input = input.slice(1);

let idx = 0;
while (idx < tc) {
  // input
  const [n, m, w] = input[0].split(" ").map(Number);
  let adj = Array.from({ length: n + 1 }, () => new Array());
  input.slice(1, m + 1).map((info) => {
    const [s, e, t] = info.split(" ").map(Number);
    adj[s].push([e, t]);
  });
  input.slice(m + 1, m + w + 1).map((info) => {
    const [s, e, t] = info.split(" ").map(Number);
    adj[s].push([e, -t]);
  });
  input = input.slice(m + w + 1);

  // BELLMAN-FORD
  let d = Array(n + 1).fill(Infinity);
  d[1] = 0;
  let isPossible = false;
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < adj[i].length; j++) {
        const [ne, nt] = adj[i][j];
        if (d[ne] > d[i] + nt) {
          d[ne] = d[i] + nt;
          if (k === n) isPossible = true;
        }
      }
    }
  }

  if (isPossible) console.log("YES");
  else console.log("NO");
  idx++;
}
