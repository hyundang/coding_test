let fs = require("fs");
// '/dev/stdin'
let n = fs
  .readFileSync('예제.txt')
  .toString();
n = Number(n);
// console.log(n)

let dp = [0, 0, 1, 1];
for(let i=4; i<=n; i++) {
    if(i%2===0) {
        dp[i] = dp[i/2] + 1;
    } 
    if(i%3===0) {
        if(dp[i]){
            if(dp[i] > dp[i/3] + 1)
                dp[i] = dp[i/3] + 1;
        } else {
            dp[i] = dp[i/3] + 1;
        }
    }
    if(!dp[i]) dp[i] = dp[i-1] + 1;
    if(dp[i] > dp[i-1]+1) dp[i] = dp[i-1] + 1;
}

// console.log(dp)
console.log(dp[n])