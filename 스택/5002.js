let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("예제.txt").toString();
// console.log(input);

let answer = 0;
let stack = [];

let i = 0;
let repeat = 0;
while (i < input.length) {
  if (input[i] === ")") {
    target = stack.pop();
    while (target !== "(") {
      if (typeof target === "number") repeat += target;
      else repeat += 1;
      target = stack.pop();
    }
    target = stack.pop();
    repeat = parseInt(target) * repeat;
    stack.push(repeat);
    // console.log(repeat)
    repeat = 0;
  } else {
    stack.push(input[i]);
  }
  i++;
}

if (stack.length !== 0) {
    while(stack.length > 0){
        target = stack.pop();
        // console.log(target)
        if(typeof target === "number") answer += target;
        else answer++;
    }
} 

console.log(answer);
