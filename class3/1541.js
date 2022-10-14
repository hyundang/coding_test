let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync('예제.txt')
  .toString()
  .replace(/\r/g, "");

let i = 0;
let stack = [];
while(i < input.length) {
    if(input[i]==='-'||input[i]==='+') {
        stack.push(input[i]);
        i++;
        continue;
    }

    let j = 0;
    while(i+j < input.length && input[i+j]!=='-' && input[i+j]!=='+') {
        j++;
    }
    stack.push(Number(input.slice(i, i+j)));
    i = i+j;
}

// console.log(stack);
let ans = 0;
let sum = 0;
let target;
while(stack.length > 0) {
    target = stack.pop();
    if(target === '-') {
        ans -= sum;
        sum = 0;
    } else if(target === '+') {
        continue;
    } else {
        sum += target;
    }
}
ans += sum;
console.log(ans);