let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

let n = Number(input[0]);
let matrix = input.slice(1).map((e) => e.split(' ').map((e) => +e))

let visited;
let flag = false;
const DFS = (v, goal) => {
    if (visited[v]) return;
    visited[v] = true;
    for (let i = 0; i < n; i++) {
        if (matrix[v][i] === 1 && i===goal) {
            flag = true;
            return;
        }
        if (matrix[v][i] === 1 && !visited[i]) DFS(i, goal);
    }
}


let ans = [];
for (let i = 0; i < n; i++) {
    ans[i] = [];
    for (let j = 0; j < n; j++) ans[i].push(0);
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        visited = new Array(n).fill(false);
        flag = false;
        DFS(i, j)
        if (flag) ans[i][j] = 1;
        else ans[i][j] = 0;
    }
}

ans.forEach((e) => console.log(e.join(' ')))