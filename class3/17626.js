let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync('예제.txt')
  .toString()
let n = Number(input);

let dp = new Array(n+1).fill(0);
dp[1] = 1;
let N = parseInt(Math.sqrt(n));
for(let i=1; i<=N; i++) {
    dp[i*i] = 1;
    
    let j = 1;
    while(i*i*j <= n) {
        if(dp[i*i*j] === 0)
            dp[i*i*j] = j;
        else {
            if(dp[i*i*j] > j)
                dp[i*i*j] = j;
        }
        j++;
    }
    
    for(let j=1; j<=n-i*i; j++) {
        if(dp[j] > 0) {
            if(dp[j+i*i]===0) dp[j+i*i] = dp[j] + 1;
            else {
                if(dp[j+i*i] > dp[j]+1) dp[j+i*i] = dp[j] + 1;
            } 
        }
    }
}

console.log(dp[n]);