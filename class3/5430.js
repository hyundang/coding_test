let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

let N = Number(input[0]);
input = input.slice(1);

let i = 0;
while (i < N) {
    let p = input[i * 3].split('');
    let len = input[i * 3 + 1];
    let arr = input[i * 3 + 2];
    if (Number(len) === 0) arr = [];
    else arr = arr.slice(1, arr.length - 1).split(',').map((e) => +e);
    // console.log(arr)

    let isEmpty = false;
    let isReversed = false;
    for (let j = 0; j < p.length; j++) {
        if (p[j] === 'R') {
            isReversed = !isReversed;
        } else {
            if (arr.length === 0) {
                isEmpty = true;
                break;
            }
            if(isReversed) arr.pop();
            else arr.shift();
        }
    }
    if(isReversed) arr.reverse();
    if(isEmpty) console.log('error');
    else console.log('[' + arr.join(',') + ']');

    i++;
}