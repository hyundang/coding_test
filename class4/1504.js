let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, e] = input[0].split(" ").map(Number);

let adj = Array.from({ length: n + 1 }, () => new Array());
input.slice(1, e + 1).forEach((info) => {
  const [u, v, w] = info.split(" ").map(Number);
  adj[u].push([v, w]);
  adj[v].push([u, w]);
});

const [v1, v2] = input[e + 1].split(" ").map(Number);

// 최소힙
class Heap {
  constructor() {
    this.heap = [];
  }

  push(newValue) {
    const heap = this.heap;
    heap.push(newValue);
    let index = heap.length - 1,
      parent = Math.floor((index - 1) / 2);
    while (index > 0 && heap[parent][1] > heap[index][1]) {
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length <= 1) return heap.pop();
    const ret = heap[0];
    heap[0] = heap.pop();
    let here = 0;
    while (1) {
      let left = here * 2 + 1,
        right = here * 2 + 2;
      if (left >= heap.length) break;
      let next = here;
      if (heap[next][1] > heap[left][1]) next = left;
      if (right < heap.length && heap[next][1] > heap[right][1]) next = right;
      if (next === here) break;
      [heap[here], heap[next]] = [heap[next], heap[here]];
      here = next;
    }
    return ret;
  }
}

function dijkstra(start, end) {
  let visited = new Array(n + 1).fill(-1);
  let pq = new Heap();
  pq.push([start, 0]);
  visited[start] = 0;
  while (pq.heap.length > 0) {
    const [cur_v, cur_w] = pq.pop();
    adj[cur_v].forEach((next) => {
      const [v, w] = next;
      if (visited[v] === -1 || visited[v] > visited[cur_v] + w) {
        visited[v] = visited[cur_v] + w;
        pq.push([v, visited[v]]);
      }
    });
  }
  return visited[end];
}
// v1, v2 사이 최단경로 구하기(디익스트라)
// 만약 최단경로 없으면 -1 반환
const dist_v1_v2 = dijkstra(v1, v2);
if (dist_v1_v2 === -1) console.log(-1);
// 1->v1, 1->v2, v1->N, v2->N 최단경로 찾기
// 짝지어서 없으면 -1 반환
else {
  const dist_1_v1 = dijkstra(1, v1);
  const dist_1_v2 = dijkstra(1, v2);
  if (dist_1_v1 === -1) {
    const dist_v1_N = dijkstra(v1, n);
    if (dist_1_v2 === -1 || dist_v1_N === -1) console.log(-1);
    else console.log(dist_1_v2 + dist_v1_v2 + dist_v1_N);
  } else if (dist_1_v2 === -1) {
    const dist_v2_N = dijkstra(v2, n);
    if (dist_1_v1 === -1 || dist_v2_N === -1) console.log(-1);
    else console.log(dist_1_v1 + dist_v1_v2 + dist_v2_N);
  } else {
    const dist_v1_N = dijkstra(v1, n);
    const dist_v2_N = dijkstra(v2, n);
    if (dist_v1_N === -1) {
      if (dist_1_v1 === -1 || dist_v2_N === -1) console.log(-1);
      else console.log(dist_1_v1 + dist_v1_v2 + dist_v2_N);
    } else if (dist_v2_N === -1) {
      if (dist_1_v2 === -1 || dist_v1_N === -1) console.log(-1);
      else console.log(dist_1_v2 + dist_v1_v2 + dist_v1_N);
    } else {
      console.log(
        Math.min(
          dist_1_v1 + dist_v1_v2 + dist_v2_N,
          dist_1_v2 + dist_v1_v2 + dist_v1_N
        )
      );
    }
  }
}
