let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt").toString().split("\n");
let N = Number(input[0]);
input = input.slice(1).map((e) => e.split(" "));

for (let i = 0; i < N; i++) {
  let ans = BFS(input[i][0], input[i][1]);
  console.log(ans.toUpperCase());
}

function BFS(start, goal) {
  let visited = new Array(10001).fill(0);
  let operations = ["d", "s", "l", "r"];
  let queue = [start];
  let head = 0;
  while (head < queue.length) {
    let target = queue[head];
    head++;

    let isFind = false;
    for (let i = 0; i < 4; i++) {
      let res = CalAsNum(operations[i], target);
      //   console.log(res)
      if (res === Number(target)) continue;
      if (visited[res] === 0) {
        if (visited[Number(target)] === 0) visited[res] = operations[i];
        else visited[res] = visited[Number(target)] + operations[i];
        // console.log(visited[res], res)
        if (res === Number(goal)) {
          isFind = true;
          break;
        }
        queue.push(TransNumToStr(res));
      }
    }

    if (isFind) return visited[Number(goal)];
  }
}

function CalAsNum(op, num) {
  let res;
  num = TransNumToStr(Number(num));
  switch (op) {
    case "d":
      res = Number(num) * 2;
      if (res > 9999) res = res % 10000;
      break;
    case "s":
      res = Number(num) - 1;
      if (res === -1) res = 9999;
      break;
    case "l":
      res = Number(num.substring(1, 4) + num[0]);
      break;
    case "r":
      res = Number(num[3] + num.substring(0, 3));
      break;
    default:
      break;
  }
  return res;
}

function TransNumToStr(num) {
  let res = String(num);
  if (res.length < 4) {
    let len = res.length;
    for (let i = 0; i < 4 - len; i++) {
      res = "0" + res;
    }
  }
  return res;
}
