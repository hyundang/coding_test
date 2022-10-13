let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync('예제.txt')
  .toString()
  .split('\n')
  .map((e)=>e.split(' ').map((e)=>+e));

let [n, m] = input[0];
let adj = [];
for(let i=0; i<=n; i++) adj[i] = [];
for(let i=0; i<m; i++) {
    adj[input[i+1][0]].push(input[i+1][1]);
    adj[input[i+1][1]].push(input[i+1][0]);
}

let visited = new Array(n+1).fill(0);

const DFS = (v) => {
    if(visited[v]===1) return;
    visited[v] = 1;
    adj[v].forEach((e) => visited[e]===0 && DFS(e));
}

let ans = 0;
for(let i=1; i<=n; i++) {
    if(visited[i] === 0) {
        DFS(i);
        ans++;
    }
}

console.log(ans)