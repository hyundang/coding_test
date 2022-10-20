let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n");

let N = Number(input[0]);
let map = input.slice(1).map((e) => e.split(' ').map((e) => +e));

// 상어 시작 위치
let shark = {
    x: 0,
    y: 0,
    size: 2,
    eat: 0
}
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 9) {
            shark.x = i; shark.y = j;
            map[i][j] = 0;
            break;
        }
    }
}

function sol() {
    // 상어가 움직인 총 거리
    let ans = 0;

    while (1) {
        // 방문 여부 체크 배열
        let visited = []
        for (let i = 0; i < N; i++) {
            visited[i] = new Array(N).fill(0);
        }

        // 먹을 수 있는 물고기 리스트
        let fish = [];

        // 먹을 수 있는 물고기의 위치와 거리 찾기(bfs)
        let queue = [[shark.x, shark.y]];
        let head = 0;
        const dx = [-1, 0, 1, 0];
        const dy = [0, -1, 0, 1];
        while (head < queue.length) {
            let [c_x, c_y] = queue[head];
            head++;
            for (let i = 0; i < 4; i++) {
                let n_x = c_x + dx[i], n_y = c_y + dy[i];

                if (n_x < 0 || n_x >= N || n_y < 0 || n_y >= N) continue;

                if (visited[n_x][n_y] === 0 && map[n_x][n_y] <= shark.size) {
                    queue.push([n_x, n_y]);
                    visited[n_x][n_y] = visited[c_x][c_y] + 1;
                    if (map[n_x][n_y] > 0 && map[n_x][n_y] < shark.size) {
                        fish.push([n_x, n_y, visited[c_x][c_y] + 1]);
                    }
                }
            }
        }

        if (fish.length > 0) {
            // 먹을 수 있는 물고기 리스트 정렬(거리 -> x좌표 -> y좌표 순)
            fish.sort((a, b) => {
                if (a[2] === b[2]) {
                    if (a[0] === b[0]) {
                        return a[1] - b[1];
                    } else return a[0] - b[0];
                } else return a[2] - b[2];
            });
            // console.log(fish)

            // 물고기 먹고 해당 위치로 상어 이동시킴
            const [s_x, s_y, dist] = fish[0];
            shark.eat++;
            if (shark.eat === shark.size) {
                shark.size++;
                shark.eat = 0;
            }
            shark.x = s_x, shark.y = s_y;
            map[s_x][s_y] = 0;

            // console.log(s_x, s_y, dist)
            ans += dist;
        } else {
            return ans;
        }
    }
}

console.log(sol());