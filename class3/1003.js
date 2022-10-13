let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((e) => +e);
// console.log(input);

let dp = new Array(41).fill({ zero: 0, one: 0 });
dp[0] = { zero: 1, one: 0 };
dp[1] = { zero: 0, one: 1 };
for (let i = 2; i < dp.length; i++) {
  dp[i] = {
    zero: dp[i - 1].zero + dp[i - 2].zero,
    one: dp[i - 1].one + dp[i - 2].one,
  };
}

// console.log(dp)

input = input.slice(1);
for (let i = 0; i < input.length; i++) {
  console.log(dp[input[i]].zero, dp[input[i]].one);
}
