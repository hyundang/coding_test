let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

if (n >= k) {
  console.log(n - k);
  console.log(1);
} else {
  let visited = new Array(100001).fill(-1);
  let answer = [];
  let queue = [n];
  let head = 0;
  visited[n] = 0;
  while (queue.length > head) {
    const cur = queue[head];
    head++;
    if (cur - 1 >= 0) {
      if (cur - 1 === k) answer.push(visited[cur] + 1);
      if (visited[cur - 1] === -1 || visited[cur - 1] >= visited[cur] + 1) {
        visited[cur - 1] = visited[cur] + 1;
        queue.push(cur - 1);
      }
    }
    if (cur + 1 <= k) {
      if (cur + 1 === k) answer.push(visited[cur] + 1);
      if (visited[cur + 1] === -1 || visited[cur + 1] >= visited[cur] + 1) {
        visited[cur + 1] = visited[cur] + 1;
        queue.push(cur + 1);
      }
    }
    if (cur * 2 >= 0 && cur * 2 <= k + 1) {
      if (cur * 2 === k) answer.push(visited[cur] + 1);
      if (visited[cur * 2] === -1 || visited[cur * 2] >= visited[cur] + 1) {
        visited[cur * 2] = visited[cur] + 1;
        queue.push(cur * 2);
      }
    }
  }
  const min = Math.min(...answer);
  let cnt = 0;
  answer.forEach((ans) => ans === min && cnt++);
  console.log(min);
  console.log(cnt);
}
