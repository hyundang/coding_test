let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

let [n, m] = input[0].split(' ').map(Number);
let map = input.slice(1, n + 1).map((e) => e.split(' ').map((e) => +e));
let mats = input.slice(n + 1).map((e) => e.split(' ').map(Number));

let sums = Array.from({ length: n }, () => new Array(n).fill(0));
sums[0][0] = map[0][0];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === 0) {
            if (j > 0) sums[i][j] = sums[i][j - 1] + map[i][j];
        } else if (j === 0) {
            if (i > 0) sums[i][j] = sums[i - 1][j] + map[i][j];
        } else {
            sums[i][j] = sums[i - 1][j] + sums[i][j - 1] - sums[i - 1][j - 1] + map[i][j];
        }
    }
}

let ans = [];
for (let i = 0; i < m; i++) {
    let [x_1, y_1, x_2, y_2] = mats[i];
    if (x_1 === 1 && y_1 === 1) {
        ans.push(sums[x_2 - 1][y_2 - 1]);
    } else if (x_1 === 1) {
        ans.push(sums[x_2 - 1][y_2 - 1] - sums[x_2 - 1][y_1 - 2]);
    } else if (y_1 === 1) {
        ans.push(sums[x_2 - 1][y_2 - 1] - sums[x_1 - 2][y_2 - 1]);
    } else {
        ans.push(sums[x_2 - 1][y_2 - 1] - sums[x_2 - 1][y_1 - 2] - sums[x_1 - 2][y_2 - 1] + sums[x_1 - 2][y_1 - 2]);
    }
}
console.log(ans.join('\n'));