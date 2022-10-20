let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n");
let [n, m] = input[0].split(' ').map((e) => +e);

let arr = input[1].split(' ').map((e) => +e).sort((a, b) => a - b)

const getPermuations = (arr, selectNum) => {
    let res = [];
    if (selectNum === 1) return arr.map((e) => [e]);

    arr.forEach((fixed, idx, origin) => {
        let newArr = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        let permutations = getPermuations(newArr, selectNum - 1);
        let attached = permutations.map((e) => [fixed, ...e]);
        res.push(...attached);
    })
    return res;
}

let res = getPermuations(arr, m);
res = res.map((e) => console.log(e.join(' ')));
// res = new Set(res);
// res.forEach((e) => e && console.log(e));