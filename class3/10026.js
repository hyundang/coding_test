let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")

let n = Number(input[0]);
input = input.slice(1).map((e) => e.split(''))
// console.log(input);


let matrix;

function bfs(i, j, color, isRG) {
    let queue = [[i, j]];
    let head = 0;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    while (head < queue.length) {
        let [x, y] = queue[head];
        head++;
        for (let i = 0; i < 4; i++) {
            if (check(x + dx[i], y + dy[i], color, isRG)) {
                queue.push([x + dx[i], y + dy[i]]);
            }
        }
    }
}

function check(i, j, color, isRG) {
    if (i < 0 || i >= n || j < 0 || j >= n) return false;
    if (isRG) {
        if (color === 'R' || color === 'G') {
            if (matrix[i][j] === 'R' || matrix[i][j] === 'G') {
                matrix[i][j] = -1;
                return true;
            }
        } else if (matrix[i][j] === color) {
            matrix[i][j] = -1;
            return true;
        }
    } else if (matrix[i][j] === color) {
        matrix[i][j] = -1;
        return true;
    }
    return false;
}

matrix = input.map((e)=>[...e]);
let cnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== -1) {
            bfs(i, j, matrix[i][j], false);
            cnt++;
        }
    }
}

matrix = input.map((e)=>[...e]);
let cnt2 = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== -1) {
            bfs(i, j, matrix[i][j], true);
            cnt2++;
        }
    }
}

console.log(cnt, cnt2);