let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync('예제.txt')
  .toString()
  .split('\n');
let n = Number(input[0]);
const list = input.slice(2).map((e)=>e.split(' ').map((e)=>+e))
// console.log(list)

let adj = new Array(n+1);
for(let i=0; i<list.length; i++) {
    if(adj[list[i][0]])
        adj[list[i][0]].push(list[i][1]);
    else
        adj[list[i][0]] = [list[i][1]];
    
    if(adj[list[i][1]])
        adj[list[i][1]].push(list[i][0]);
    else
        adj[list[i][1]] = [list[i][0]];
}

let visited = new Array(n+1).fill(0);
let queue = [1];
let ans = 0;
while(queue.length > 0) {
    let computer = queue.shift();
    if(visited[computer] === 0) {
        visited[computer] = 1;
        ans++;
        adj[computer]?.forEach((e) => visited[e]===0 && queue.push(e));
    }
}

console.log(ans-1)