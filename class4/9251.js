let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

const str1 = input[0].split('')
const str2 = input[1].split('')

let lcs = Array.from({length:str1.length+1}, () => new Array(str2.length+1))

for(let i=0; i<=str1.length; i++) {
    for(let j=0; j<=str2.length; j++) {
        if(i==0 || j==0) lcs[i][j] = 0
        else if(str1[i-1]==str2[j-1]) lcs[i][j] = lcs[i-1][j-1] + 1
        else lcs[i][j] = Math.max(lcs[i-1][j], lcs[i][j-1])
    }
}

// console.log(lcs)
console.log(lcs[str1.length][str2.length])