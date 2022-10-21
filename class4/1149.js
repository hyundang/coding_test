let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

let n = Number(input[0]);
let rgb = Array.from({ length: n + 1 }, () => new Array());
input.slice(1).map((e, idx) => {
    let price = e.split(' ').map(Number);
    rgb[idx + 1] = price;
})

let dp = Array.from({ length: n + 1 }, () => new Array(3).fill(0));
for (let i = 1; i <= n; i++) {
    dp[i][0] = rgb[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = rgb[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = rgb[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(dp[n][0], dp[n][1], dp[n][2]));