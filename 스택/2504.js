let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("")
// console.log(input);

let answer = 0;
let stack = [];
let i = 0;
let target;
let sum = 1;
while(i < input.length) {
    switch(input[i]) {
        case '(':
            stack.push(input[i]);
            sum *= 2;
            break;
        case '[':
            stack.push(input[i]);
            sum *= 3;
            break;
        case ')':
            target = stack.pop();
            if(target === '(') {
                if(input[i-1] === '(') answer += sum;
                sum  = parseInt(sum / 2);
            } else {
                return console.log(0);
            }
            break;
        case ']':
            target = stack.pop();
            if(target === '[') {
                if(input[i-1] === '[') answer += sum;
                sum  = parseInt(sum / 3);
            } else {
                return console.log(0);
            }
            break;
        default:
            break;
    }
    i++;
}

if (stack.length === 0) console.log(answer);
else console.log(0);