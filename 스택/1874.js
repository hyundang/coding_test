let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((e) => +e);
// console.log(input);

const len = input[0];
input = input.slice(1);

let stack = [];
let answer = "";
let num = 1;
let target = 0;
let flag = false;
for(let i=0; i<len; i++) {
    flag = false;
    if(stack.length === 0) {
        stack.push(num);
        answer += '+\n';
        num++;
    }
    while(stack.length > 0) {
        target = stack[stack.length-1];
        if(target > input[i]) {
            answer += '-\n';
            stack.pop();
        } else if (target === input[i]) {
            answer += '-\n';
            stack.pop();
            flag = true;
            break;
        } else {
            if (num > input[i]) break;
            answer += '+\n';
            stack.push(num);
            num++;
        }
    }
    if(!flag) break;
}

if(flag)
    console.log(answer);
else
    console.log("NO");
