let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map((ee) => +ee));
// console.log(input);

const len = input[0][0];
input = input.slice(1);

let stack = [[],[],[],[],[],[]];
let answer = 0;
let i = 0;
let target, line, fret, flag;
while(i < len) {
    line = input[i][0];
    fret = input[i][1];
    flag = false;
    if(stack[line-1].length === 0) {
        stack[line-1].push(fret);
        answer++;
    } else {
        target = stack[line-1][stack[line-1].length-1];
        while(target > fret) {
            target = stack[line-1].pop();
            if(target < fret) break;
            if(target === fret) {
                flag = true;
                stack[line-1].push(target);
                break;
            }
            answer++; 
            if(stack[line-1].length === 0) break;
        }
        
        if(target === fret) {
            flag = true;
        }
        if(!flag){
            stack[line-1].push(fret);
            answer++;
        }
    }
    // console.log(answer)
    i++;
}

console.log(answer);