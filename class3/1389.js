let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map((e) => +e));

let [n, m] = input[0];
let adj = [];
for (let i = 0; i <= n; i++) adj[i] = [];
for (let i = 0; i < m; i++) {
  adj[input[i + 1][0]].push(input[i + 1][1]);
  adj[input[i + 1][1]].push(input[i + 1][0]);
}

let visited = new Array(n + 1).fill(-1);

const DFS = (prev, v) => {
  if (visited[v] > -1) return;
  visited[v] = visited[prev] + 1;
  adj[v].forEach((e) => visited[e] === -1 && DFS(v, e));
};

const BFS = (start) => {
  let queue = [];
  adj[start].forEach((e) => {
    visited[e] = 1;
    queue.push(e);
  });
  while (queue.length > 0) {
    let v = queue.shift();
    if (visited[v] > -1) {
      adj[v].forEach((e) => {
        if (visited[e] === -1) {
          visited[e] = visited[v] + 1;
          queue.push(e);
        }
      });
    }
  }
};

let kb_nums = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  visited[i] = 0;
  BFS(i);
  let sum = 0;
  visited.forEach((e) => {
    if (e !== -1) sum += e;
  });
  kb_nums[i] = sum;
  // console.log(visited)
  visited = new Array(n + 1).fill(-1);
}

// console.log(kb_nums)
let min = kb_nums[1];
let idx = 1;
for (let i = 2; i <= n; i++) {
  if (min > kb_nums[i]) {
    min = kb_nums[i];
    idx = i;
  }
}
console.log(idx);
