let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

let n = Number(input[0]);
let m = Number(input[1]);
let pn = 2 * n + 1;

let i = 0;
let ans = 0;
while (i < m) {
    let len = 0;
    if (input[2][i] === 'I') {
        let flag = 1;
        let j = 1;
        len++;
        while (i + j < m) {
            if (flag === 1 && input[2][i + j] === 'O') {
                flag = 0;
                len++;
            } else if (flag === 0 && input[2][i + j] === 'I') {
                flag = 1;
                len++;
            } else {
                break;
            }
            j++;
        }

        // console.log(len)
        if (len % 2 === 1) {
            i += j;
            if (len >= pn) ans += (len - pn) / 2 + 1;
        } else {
            i += j - 1;
            if (len - 1 >= pn) ans += (len - 1 - pn) / 2 + 1;
        }
    } else {
        i++;
    }
}

console.log(ans);