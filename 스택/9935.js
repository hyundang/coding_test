let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("예제.txt").toString().split("\n");
// console.log(input);

let bomb = input[1];
input = input[0];

let stack = [];
let stack2 = [];
let i = 0;
while (i < input.length) {
  if (input[i] === bomb[bomb.length - 1]) {
    stack.push(input[i]);
    let j = 0;
    while (bomb.length - 1 - j >= 0 || stack.length > 0) {
      if (stack[stack.length - 1] === bomb[bomb.length - 1 - j]) {
        stack2.push(stack.pop());
        j++;
      } else break;
    }
    if (stack2.length === bomb.length) {
      stack2 = [];
    } else {
      while (stack2.length > 0) {
        stack.push(stack2.pop());
      }
    }
  } else {
    stack.push(input[i]);
  }
  i++;
}

if (stack.length === 0) console.log("FRULA");
else if (stack[0] === "\r") console.log("FRULA");
else console.log(stack.join(""));
