let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync('예제.txt')
  .toString()
  .split('\n')
  .map((e)=>e.replace(/\r/g, ""));
let nums = input[1].split(' ').map((e)=>+e);

let dp = new Array(nums.length+1).fill(0);
for(let i=0; i<nums.length; i++) {
    dp[i+1] = dp[i]+nums[i];
}

let ans = []
input.slice(2).forEach((e)=>{
    let [begin, end] = e.split(' ').map((e)=>+e);
    ans.push(dp[end]-dp[begin-1]);
})
// console.log(dp)

console.log(ans.join('\n'))