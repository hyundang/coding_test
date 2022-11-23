let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

const [n, k] = input[0].split(' ').map(Number);

if (n < k) {
    let visited = new Array(Math.max(n, k) + 2).fill(-1)
    visited[n] = 0;
    let queue = [n];
    let head = 0
    while(head < queue.length) {
        cur = queue[head];
        head++;
        if (cur < 0 || cur > Math.max(n, k) + 1) continue;
        if (cur - 1 >= 0 && cur - 1 <= Math.max(n, k) + 1) {
            if (visited[cur - 1] == -1 || visited[cur - 1] > visited[cur] + 1) {
                visited[cur - 1] = visited[cur] + 1;
                queue.push(cur-1)
            }
        }

        if (cur + 1 >= 0 && cur + 1 <= Math.max(n, k) + 1) {
            if (visited[cur + 1] == -1 || visited[cur + 1] > visited[cur] + 1) {
                visited[cur + 1] = visited[cur] + 1;
                queue.push(cur + 1)
            }
        }

        if (2 * cur >= 0 && 2 * cur <= Math.max(n, k) + 1) {
            if (visited[2 * cur] == -1 || visited[2 * cur] > visited[cur]) {
                visited[2 * cur] = visited[cur];
                queue.push(2 * cur)
            }
        }
    }
    console.log(visited[k]);
} else {
    console.log(n - k)
}
// console.log(visited)