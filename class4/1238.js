let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, m, x] = input[0].split(" ").map(Number);
let adj = Array.from({ length: n + 1 }, () => new Array());
input.slice(1).map((info) => {
  const [u, v, w] = info.split(" ").map(Number);
  adj[u].push([v, w]);
});

// min heap
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
      [heap[index], heap[parent]] = [heap[parent], heap[index]];
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
  let pq = new Heap();
  pq.push([start, 0]);
  let visited = new Array(n + 1).fill(-1);
  visited[start] = 0;
  while (pq.heap.length > 0) {
    const [c_v, c_w] = pq.pop();
    adj[c_v].forEach((next) => {
      const [v, w] = next;
      if (visited[v] === -1 || visited[v] > visited[c_v] + w) {
        visited[v] = visited[c_v] + w;
        pq.push([v, visited[v]]);
      }
    });
  }
  return visited[end];
}

let path = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  if (i === x) continue;
  path[i] += dijkstra(i, x);
  path[i] += dijkstra(x, i);
}

console.log(Math.max(...path));
