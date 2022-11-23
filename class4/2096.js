let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

const n = Number(input[0])
const list = input.slice(1).map((e) => e.split(' ').map(Number))

