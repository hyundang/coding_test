let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

input = input.slice(1).map((e) => e.split(' ').map((e) => +e));

const gcd = (a, b) => {
    return b === 0? a : gcd(b, a % b);
};

let ans = [];
for (const ip of input) {
    let [m, n, x, y] = ip;
    let value = -1;
    let i = 0;
    let lcm = (m * n) / gcd(m, n);
    while (m*i < lcm) {
        if ((m * i + x) % n === y) {
            value = m * i + x;
            break;
        }
        i++;
    }
    ans.push(value);
}

console.log(ans.join('\n'));