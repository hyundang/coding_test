let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = input
  .slice(1)
  .map((info) => info.split("").slice(0, m).map(Number));

const dx = [1, 0, -1, 0],
  dy = [0, 1, 0, -1];
function bfs(map) {
  let queue = [[0, 0, 0]];
  let head = 0;
  let visited = Array.from({ length: 2 }, () =>
    Array.from({ length: n }, () => new Array(m).fill(-1))
  );
  visited[0][0][0] = 1;
  while (queue.length > head) {
    const [floor, cx, cy] = queue[head];
    head++;
    for (let i = 0; i < 4; i++) {
      if (
        cx + dx[i] < n &&
        cx + dx[i] >= 0 &&
        cy + dy[i] < m &&
        cy + dy[i] >= 0 &&
        (visited[floor][cx + dx[i]][cy + dy[i]] === -1 ||
          visited[floor][cx + dx[i]][cy + dy[i]] > visited[floor][cx][cy] + 1)
      ) {
        if (map[cx + dx[i]][cy + dy[i]] === 0) {
          visited[floor][cx + dx[i]][cy + dy[i]] = visited[floor][cx][cy] + 1;
          queue.push([floor, cx + dx[i], cy + dy[i]]);
        } else if (floor === 0) {
          visited[1][cx + dx[i]][cy + dy[i]] = visited[floor][cx][cy] + 1;
          queue.push([1, cx + dx[i], cy + dy[i]]);
        }
      }
    }
  }

  if (visited[0][n - 1][m - 1] === -1 || visited[1][n - 1][m - 1] === -1) {
    if (visited[0][n - 1][m - 1] === -1 && visited[1][n - 1][m - 1] === -1)
      return -1;
    else if (visited[0][n - 1][m - 1] === -1) return visited[1][n - 1][m - 1];
    else return visited[0][n - 1][m - 1];
  } else return Math.min(visited[0][n - 1][m - 1], visited[1][n - 1][m - 1]);
}

console.log(bfs(map));
