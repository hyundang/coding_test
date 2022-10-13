let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt").toString().split("\n");

let [n, r, c] = input[0].split(" ").map((e) => +e);
// console.log(n, r, c);

let mid = 2**(n-1);
let r_c = mid, c_c = mid;
let ans = 0;
while(mid >= 1) {
    mid /= 2;
    if(r_c > r) {
        if(c_c > c) {
            r_c -= mid;
            c_c -= mid;
        } else {
            ans += 4*(mid**2);
            r_c -= mid;
            c_c += mid;
        }
    } else {
        if(c_c > c) {
            ans += 8*(mid**2);
            r_c += mid;
            c_c -= mid;
        } else {
            ans += 12*(mid**2);
            r_c += mid;
            c_c += mid;
        }
    }
}

console.log(ans);