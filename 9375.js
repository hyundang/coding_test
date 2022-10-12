let fs = require("fs");
// '/dev/stdin'
let input = fs
  .readFileSync('예제.txt')
  .toString()
  .split('\n')
  .map((e)=>e.replace(/\r/g, ""));
let n = Number(input[0]);

let i=1;
while(i < input.length) {
    let clothesNum = Number(input[i]);
    let clothes = {}
    input.slice(i+1, i+1+clothesNum).map((e)=> {
        let [clothe, type] = e.split(' ');
        if(clothes[type]) clothes[type] += 1;
        else clothes[type] = 1;
    });

    let types = Object.keys(clothes);
    let ans = 1;
    types.forEach((type) => ans *= clothes[type]+1);
    console.log(ans-1)
    i += clothesNum+1;
}