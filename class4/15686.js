let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

const [n, m] = input[0].split(' ').map(Number);
const map = [];
let chickens = [];
input.slice(1).forEach((e) => {
    let arr = e.split(' ').map(Number);
    let idx = arr.indexOf(2);
    if (idx >= 0) chickens.push([map.length, idx])
    map.push(arr)
})

// console.log(map)
// console.log(chickens)

function getPermutations(arr, selectNum) {
    let res = [];
    if (selectNum == 1) return arr.map((e) => [e]);
    arr.forEach((fixed, idx, origin) => {
        let newArr = [...origin.slice(idx+1)];
        let permutations = getPermutations(newArr, selectNum-1);
        let connected = permutations.map((e) => [fixed, ...e]);
        res.push(...connected);
    })
    return res;
}

let arr = [];
for (let i = 0; i < chickens.length; i++) arr.push(i);
let cases = getPermutations(arr, m);
// console.log(cases)

cases.forEach((c) => {
    // 치킨배달 거리 계산
    for(let i=0; i<c.length; i++) {
        let [x, y] = chickens[i];
        
    }
})