let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

let n = Number(input[0]);
let map = input.slice(1).map((e) => e.split(' ').map(Number));
let dp = [];
for (let i = 0; i < n; i++) {
    dp[i] = new Array(i + 1).fill(0);
}

dp[0][0] = map[0][0];
for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0)
            dp[i][j] = dp[i - 1][j] + map[i][j];
        else if (j === i)
            dp[i][j] = dp[i - 1][j - 1] + map[i][j];
        else
            dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + map[i][j];
    }
}
console.log(Math.max(...dp[n-1]))

