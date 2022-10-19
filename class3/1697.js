let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map((e) => +e);

if (n < k) {
  let dp = new Array(k + 2).fill(0);
  if (n > 0) {
    for (let i = n - 1; i >= 0; i--) {
      dp[i] = n - i;
    }
  }
  for (let i = n + 1; i <= k + 1; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2] + 1;
      if (dp[i - 1] > dp[i] + 1) dp[i - 1] = dp[i] + 1;
    }
    if (dp[i] === 0) {
      dp[i] = dp[i - 1] + 1;
    } else if (dp[i] > dp[i - 1] + 1) dp[i] = dp[i - 1] + 1;
  }

  console.log(dp[k]);
} else if (n == k) {
  console.log(0);
} else {
  console.log(n - k);
}
