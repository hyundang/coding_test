let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("예제.txt").toString().split("\n");
// console.log(input);

let len = input[0];
input = input[1].split(" ").map((e) => +e);

let target;
let answer = [];
let stack = [];
let i = len - 1;
while (i >= 0) {
  if (stack.length === 0) {
    answer.push(-1);
  } else {
    while(stack.length > 0) {
        target = stack.pop();
        if(target > input[i]) {
            answer.push(target);
            stack.push(target);
            break;
        }
    }
    if(stack.length === 0) answer.push(-1);
  }
  stack.push(input[i]);
  i--;
}

console.log(answer.reverse().join(' '));
