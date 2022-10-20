let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n");
let [n, m] = input[0].split(' ').map((e) => +e);

let a = BigInt(1), b = BigInt(1);
for (let i = 0; i < m; i++) {
    a *= BigInt(n - i);
    b *= BigInt(i + 1);
}
console.log(Number(a / b));