let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");
let [a, b] = input[0].split(' ').map((e) => +e);

let ans;

function DFS(v, cnt) {
    if (v > b) return;
    if (v === b) {
        ans = cnt;
        return;
    }

    DFS(v * 2, cnt + 1);
    DFS(v * 10 + 1, cnt + 1);
}

DFS(a, 1);
if (ans) console.log(ans);
else console.log(-1);