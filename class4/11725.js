let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

let n = Number(input[0]);
let adj = Array.from({ length: n + 1 }, () => new Array());

input.slice(1).map((e) => {
    let [u, v] = e.split(' ').map(Number);
    adj[u].push(v);
    adj[v].push(u);
})

let tree = new Array(n + 1).fill(0);
tree[1] = -1;
function BFS() {
    let queue = [1];
    let head = 0;
    while (head < queue.length) {
        let cur = queue[head];
        head++;
        adj[cur].forEach((v) => {
            if (tree[v] === 0) {
                tree[v] = cur;
                queue.push(v);
            }
        })
    }
}

BFS()
console.log(tree.slice(2).join("\n"))