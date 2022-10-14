let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

let N = Number(input[0]);
let matrix = input.slice(1).map((e) => e.split('').map((e) => {
    if (e === '1') return -1;
    else return 0;
}))

// console.log(matrix);

let idx = 1;
let sum = 0;
const CheckAPT = (x, y) => {
    if (matrix[x][y] === -1) {
        sum++;
        matrix[x][y] = idx;
        if (x < N - 1) CheckAPT(x + 1, y);
        if (y < N - 1) CheckAPT(x, y + 1);
        if (x > 0) CheckAPT(x - 1, y);
        if (y > 0) CheckAPT(x, y - 1);
    } else {
        return;
    }
}

let ans = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (matrix[i][j] === -1) {
            sum = 0;
            CheckAPT(i, j);
            ans.push(sum);
            idx++;
        }
    }
}

// matrix.forEach((e) => console.log(e.join('')))
console.log(ans.length);
ans.sort((a, b) => a - b).forEach((e) => console.log(e))