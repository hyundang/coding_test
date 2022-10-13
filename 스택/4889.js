let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("예제.txt").toString().split("\n");
// console.log(input);

function count(str) {
  let cnt = 0;
  let stack = [];
  let i = 0;
  let target;
  while (i < str.length) {
    if (str[i] === "}") {
      target = stack.pop();
      if (!target) {
        stack.push("{");
        cnt++;
      }
    } else {
      stack.push(str[i]);
    }
    i++;
  }
  if (stack.length !== 0) {
    cnt += parseInt(stack.length / 2);
  }
  // while(stack.length > 0) {
  //   if(stack.length % 2 === 0) cnt++;
  //   stack.pop();
  // }

  return cnt;
}

let answer = [];
input.map((str) => {
  if (str[0] !== '-') answer.push(count(str));
});

answer.map((e, idx) => console.log(`${idx + 1}. ${e}`));

// count(input[0])
