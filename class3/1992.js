let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

let N = Number(input[0]);
let matrix = input.slice(1).map((e) => e.split('').map((e) => +e));
// console.log(matrix)

let ans = [];
const QuadTree = (n, x, y) => {
    let sum = 0;
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            sum+= matrix[x+i][y+j];
        }
    }
    if(sum===0) ans.push(0);
    else if(sum===n*n) ans.push(1);
    else {
        n /= 2;
        ans.push('(');
        QuadTree(n, x, y);
        QuadTree(n, x, y+n);
        QuadTree(n, x+n, y);
        QuadTree(n, x+n, y+n);
        ans.push(')');
    }
}

QuadTree(N, 0, 0);
console.log(ans.join(''));