let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
const items = [0, ...input[1].split(" ").map(Number)];
let adj = Array.from({ length: n + 1 }, () => new Array());
input.slice(2).forEach((info) => {
  const [u, v, w] = info.split(" ").map(Number);
  adj[u].push([v, w]);
  adj[v].push([u, w]);
});

// min-heap
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
    let index = 0;
    while (1) {
      let left = index * 2 + 1,
        right = index * 2 + 2;
      if (left >= heap.length) break;
      let next = index;
      if (heap[left][1] > heap[next][1]) next = left;
      if (right < heap.length && heap[next][1] > heap[right][1]) next = right;
      if (next === index) break;
      [heap[index], heap[next]] = [heap[next], heap[index]];
      index = next;
    }
    return ret;
  }
}

function dijkstra(start) {
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

  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (visited[i] <= m) cnt += items[i];
  }
  return cnt;
}

let answer = [];
for (let i = 1; i <= n; i++) {
  answer.push(dijkstra(i));
}
console.log(Math.max(...answer));
