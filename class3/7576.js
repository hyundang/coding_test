let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

let [m, n] = input[0].split(' ').map((e) => +e);
input = input.slice(1);

let box = [];
for (let i = 0; i < n; i++) {
    box.push(input[i].split(' ').map((e) => +e));
}

let queue = [];
// 익은 토마토의 좌표 담기
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (box[i][j] === 1) queue.push([i, j]);
    }
}

let head = 0;
let day = 0;
let iter;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
while (head < queue.length) {
    // 전날 익은 토마토 개수 계산
    iter = queue.length - head;

    let isChange = false;
    // 전날 익은 토마토 좌표들에 대하여 bfs 수행
    for (let j = 0; j < iter; j++) {
        let [x, y] = queue[head];
        head++;
        for (let i = 0; i < 4; i++) {
            if (check(x + dx[i], y + dy[i])) {
                isChange = true;
                queue.push([x + dx[i], y + dy[i]]);
            }
        }
    }

    // 새로 익은 토마토가 없는 경우 
    if (!isChange) break;
    day++;
}

function check(i, j) {
    if (i < 0 || i >= n || j < 0 || j >= m) return false;
    if (box[i][j] !== 0) return false;
    box[i][j] = 1;
    return true;
}

// 안 익은 토마토가 있는지 체크
let isRemain = false;
for (let i = 0; i < n; i++) {
    if (box[i].includes(0)) {
        isRemain = true;
        break;
    }
}

if (isRemain) console.log(-1);
else console.log(day);