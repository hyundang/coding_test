let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map((e) => +e));
// console.log(input);

const dfs = (matrix, i, j, m, n) => {
    if(i === n || j === m || i === -1 || j === -1) return matrix;
    if(matrix[i][j] === 0) return matrix;
    
    matrix[i][j] = 0;
    matrix = dfs(matrix, i+1, j, m, n);
    matrix = dfs(matrix, i, j+1, m, n);
    matrix = dfs(matrix, i-1, j, m, n);
    matrix = dfs(matrix, i, j-1, m, n);
    return matrix;
}

const caseCnt = Number(input[0][0]);
input = input.slice(1);

let ans = [];
let m, n, cnt, pivot = 0;

for(let i=0; i<caseCnt; i++) {
    // console.log(pivot)
    [m, n, cnt] = input[pivot];
    
    const arr = new Array(m).fill(0);
    let matrix = [];
    for(let j=0; j<n; j++) matrix.push([...arr])
    for(let j=1; j<=cnt; j++) {
        matrix[input[pivot+j][1]][input[pivot+j][0]] = 1;
    }

    let Num = 0;
    for(let k=0; k<n; k++) {
        for(let l=0; l<m; l++) {
            if(matrix[k][l] === 1) {
                Num++;
                matrix = dfs(matrix, k, l, m, n);
                // console.log(matrix)
            }
        }
    }
    ans.push(Num);

    pivot += cnt+1;
}

ans.forEach((e)=>console.log(e))
// console.log(ans)
