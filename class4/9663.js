let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const n = Number(input[0]);

let rows = new Array(n+1).fill(0);

let answer = 0;
function dfs(row) {
  if (row > n) {
    answer++;
    return;
  }

  for (let i = 1; i <= n; i++) {
    rows[row] = i;
    if (isOkay(row, i)) dfs(row + 1);
    else rows[row] = 0;
  }
}

function isOkay(row, col) {
  for (let i = 1; i < row; i++) {
    if (rows[i] === col) return false;
    if (Math.abs(rows[row] - rows[i]) === Math.abs(row - i)) return false;
  }
  return true;
}

dfs(1);
console.log(answer);
