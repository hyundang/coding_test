let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

let [a, b, c] = input[0].split(' ').map(Number);

let binary = b.toString(2);

let ans = BigInt(1);
let x = BigInt(a % c);
for (let i = 0; i < binary.length; i++) {
    if (i > 0) x = x * x % BigInt(c);
    if (binary[binary.length - 1 - i] === '1') {
        ans *= x;
    }
}
console.log(Number(ans % BigInt(c)))