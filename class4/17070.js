let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const n = Number(input[0]);
const map = input.slice(1).map((ip) => ip.split(" ").map(Number));

let answer = 0;
function dfs(x1, y1, x2, y2) {
  if (x2 === n - 1 && y2 == n - 1) {
    answer++;
    return;
  }
  // 가로
  if (x1 === x2) {
    if (y2 + 1 < n && map[x2][y2 + 1] === 0) {
      dfs(x2, y2, x2, y2 + 1);
      if (x2 + 1 < n && map[x2 + 1][y2] === 0 && map[x2 + 1][y2 + 1] === 0) {
        dfs(x2, y2, x2 + 1, y2 + 1);
      }
    }
  }
  // 세로
  else if (y1 === y2) {
    if (x2 + 1 < n && map[x2 + 1][y2] === 0) {
      dfs(x2, y2, x2 + 1, y2);
      if (y2 + 1 < n && map[x2][y2 + 1] === 0 && map[x2 + 1][y2 + 1] === 0) {
        dfs(x2, y2, x2 + 1, y2 + 1);
      }
    }
  }
  // 대각선
  else {
    if (y2 + 1 < n && map[x2][y2 + 1] === 0) {
      dfs(x2, y2, x2, y2 + 1);
      if (x2 + 1 < n && map[x2 + 1][y2] === 0 && map[x2 + 1][y2 + 1] === 0) {
        dfs(x2, y2, x2 + 1, y2 + 1);
      }
    }
    if (x2 + 1 < n && map[x2 + 1][y2] === 0) {

      dfs(x2, y2, x2 + 1, y2);
    }
  }
}

dfs(0, 0, 0, 1);
console.log(answer);