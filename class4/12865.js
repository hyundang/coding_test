let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

const [n, k] = input[0].split(' ').map(Number);
const infos = input.slice(1).map((e) => e.split(' ').map(Number))

let value = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));
for(let idx=0; idx<=n; idx++){
    for(let w=0; w<=k; w++){
        if(idx==0 || w==0) value[idx][w] = 0;
        else if(infos[idx-1][0] <= w) 
            value[idx][w] = Math.max(value[idx-1][w-infos[idx-1][0]]+infos[idx-1][1], value[idx-1][w]);
        else
            value[idx][w] = value[idx-1][w]
    }
}

console.log(value[n][k]);