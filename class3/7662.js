let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((e) => e.replace(/\r/g, ""));
let N = Number(input[0]);
input = input.slice(1);

let queue = [];

function enqueue(num) {
  num = Number(num);
  if (queue.length === 0) {
    queue.push(num);
  } else {
    let flag = true;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] < num) {
        queue = [...queue.slice(0, i), num, ...queue.slice(i)];
        flag = false;
        break;
      }
    }
    if (flag) queue.push(num);
  }
  //   console.log(queue);
}

function dequeue(isMax) {
  //   console.log(queue);
  if (isMax) {
    if (queue.length > 0) queue = queue.slice(1);
    // else if (queue.length === 1) queue = [];
  } else {
    if (queue.length > 0) queue = queue.slice(0, queue.length - 1);
    // else if (queue.length === 0) queue = [];
  }
  //   console.log(queue);
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  let start = cnt + 1;
  cnt = Number(input[cnt]);
  let op = input.slice(start, start + cnt).map((e) => e.split(" "));
  //   console.log(op);
  op.forEach((e) => {
    if (e[0] === "I") enqueue(e[1]);
    else dequeue(e[1] === "1");
  });
  if (queue.length === 0) console.log("EMPTY");
  else console.log(Math.max(...queue), Math.min(...queue));
  //   console.log(queue)
  queue = [];
  cnt = start + cnt;
}
