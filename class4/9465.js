let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

let T = Number(input[0]);
input = input.slice(1);

let i = 0;
while (i < T) {
    let n = Number(input[i * 3]);
    let stickers = input.slice(i * 3 + 1, (i + 1) * 3).map((e) => e.split(' ').map(Number));

    if (n === 1) {
        console.log(Math.max(stickers[0][0], stickers[1][0]));
    } else {
        let dp = Array.from({ length: 2 }, () => new Array(n).fill(0));
        dp[0][0] = stickers[0][0], dp[1][0] = stickers[1][0];
        dp[0][1] = dp[1][0] + stickers[0][1], dp[1][1] = dp[0][0] + stickers[1][1];
        let max = Math.max(dp[0][0], dp[1][0], dp[0][1], dp[1][1]);

        for (let j = 2; j < n; j++) {
            dp[0][j] = Math.max(dp[0][j - 2], dp[1][j - 2], dp[1][j - 1]) + stickers[0][j];
            dp[1][j] = Math.max(dp[0][j - 2], dp[1][j - 2], dp[0][j - 1]) + stickers[1][j];
            max = Math.max(max, dp[0][j], dp[1][j]);
        }
        console.log(max);
    }

    i++;
}