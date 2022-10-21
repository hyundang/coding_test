let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n");

let [n, m] = input[0].split(' ').map((e) => +e);
let arr = input[1].split(' ').map((e) => +e).sort((a, b) => a - b);

const getPermutations = (arr, selectNum) => {
    let res = [];

    if (selectNum === 1) return arr.map((e) => [e]);

    arr.forEach((fixed, idx, origin) => {
        let newArr = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        let permutations = getPermutations(newArr, selectNum - 1);
        let attached = permutations.map((e) => [fixed, ...e]);
        res.push(...attached);
    })

    return res;
}

let ans = getPermutations(arr, m);
ans = ans.map((e) => e.join(' '));
ans = new Set(ans);
ans.forEach((e) => e && console.log(e))