let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")

let map = new Array(101).fill(0);

input.slice(1).map((e) => {
    let [u, v] = e.split(' ').map((e) => +e);
    map[u] = v;
    return e;
})

let visited = new Array(101).fill(0);

function BFS() {
    let queue = [1];
    let head = 0;
    while (head < queue.length) {
        let cur = queue[head];
        head++;

        for (let i = 1; i <= 6; i++) {
            let next = cur + i;

            if (next > 100) continue;

            if (map[next] !== 0) next = map[next];
            if (visited[next] === 0) {
                visited[next] = visited[cur] + 1;
                queue.push(next);
            }
        }
    }

    console.log(visited[100]);
}

BFS();