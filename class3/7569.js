let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

let [m, n, h] = input[0].split(' ').map((e) => +e);
input = input.slice(1);

let box = [];
for (let i = 0; i < h; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
        arr.push(input[n * i + j].split(' ').map((e) => +e));
    }
    box.push([...arr]);
}
// console.log(box)

let queue = [];
for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            if (box[i][j][k] === 1) queue.push([i, j, k]);
        }
    }
}

let head = 0;
const dx = [1, 0, 0, -1, 0, 0];
const dy = [0, 1, 0, 0, -1, 0];
const dz = [0, 0, 1, 0, 0, -1];
let iter, day = 0;
while (head < queue.length) {
    iter = queue.length - head;
    let isChange = false;

    for (let i = 0; i < iter; i++) {
        let [x, y, z] = queue[head];
        head++;
        for (let j = 0; j < 6; j++) {
            if (check(x + dx[j], y + dy[j], z + dz[j])) {
                isChange = true;
                queue.push([x + dx[j], y + dy[j], z + dz[j]]);
            }
        }
    }

    if (!isChange) break;
    day++;
}

function check(i, j, k) {
    if (i < 0 || i >= h || j < 0 || j >= n || k < 0 || k >= m) return false;
    if (box[i][j][k] !== 0) return false;
    box[i][j][k] = 1;
    return true;
}

let isRemain = false;
for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        if (box[i][j].includes(0)) {
            isRemain = true;
            break;
        }
    }
}

if (isRemain) console.log(-1);
else console.log(day);