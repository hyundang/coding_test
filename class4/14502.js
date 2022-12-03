let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let map = input.slice(1).map((e) => e.split(" ").map(Number));

let cnt = 0;
function find(x, y) {
  if (cnt === 3) return count();
  for (let i = x; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (cnt > 0 && i === x && j <= y) continue;
      if (map[i][j] === 0) {
        map[i][j] = 1;
        cnt++;
        find(i, j);
        map[i][j] = 0;
        cnt--;
      }
    }
  }
}

let answer = [];
function count() {
  let map_copy = map.map((v) => v.slice());
  let visited = Array.from({ length: n }, () => new Array(m).fill(false));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map_copy[i][j] === 2 && !visited[i][j]) bfs(i, j, map_copy, visited);
    }
  }
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map_copy[i][j] === 0) total++;
    }
  }
  answer.push(total);
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
function bfs(x, y, map, visited) {
  let queue = [[x, y]];
  let head = 0;
  visited[x][y] = true;
  while (queue.length > head) {
    const [cx, cy] = queue[head];
    head++;
    for (let i = 0; i < 4; i++) {
      if (
        cx + dx[i] >= 0 &&
        cx + dx[i] < n &&
        cy + dy[i] >= 0 &&
        cy + dy[i] < m &&
        map[cx + dx[i]][cy + dy[i]] === 0
      ) {
        map[cx + dx[i]][cy + dy[i]] = 2;
        visited[cx + dx[i]][cy + dy[i]] = true;
        queue.push([cx + dx[i], cy + dy[i]]);
      }
    }
  }
}

find(0, 0);
// console.log(answer.length);
console.log(Math.max(...answer));
