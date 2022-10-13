let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((e)=>e.split(' '))
// console.log(input);

const N = input[0];
input = input.slice(1);

const Operation = (op, num, arr) => {
    let idx;
    switch(op) {
        case 'add':
            if(!arr.includes(num)) arr.push(num);
            break;
        case 'remove':
            idx = arr.indexOf(num);
            if(idx >= 0) arr = [...arr.slice(0, idx), ...arr.slice(idx+1)];
            break;
        case 'check':
            if(arr.includes(num)) console.log(1);
            else console.log(0);
            break;
        case 'toggle':
            idx = arr.indexOf(num);
            if(idx >= 0) arr = [...arr.slice(0, idx), ...arr.slice(idx+1)];
            else arr.push(num);
            break;
        case 'all\r':
            let new_arr = [];
            for(let i=1; i<21; i++) new_arr.push(`${i}\r`);
            return [...new_arr];
        case 'empty\r':
            return [];
        default:
            break;
    }
    return arr;
}

let arr = [];
for(let i=0; i<N; i++) {
    arr = Operation(input[i][0], input[i][1], arr);
    // console.log(arr)
}