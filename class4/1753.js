let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, e] = input[0].split(" ").map(Number);
const k = Number(input[1]);

// 인접리스트 생성
let adj = Array.from({ length: n + 1 }, () => new Array());
input.slice(2).forEach((info) => {
  const [u, v, w] = info.split(" ").map(Number);
  adj[u].push([v, w]);
});

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
    while (true) {
      let left = here * 2 + 1,
        right = here * 2 + 2;
      if (left >= heap.length) break;
      let next = here;
      if (heap[next][1] > heap[left][1]) next = left;
      if (right < heap.length && heap[next][1] > heap[right][1]) next = right;
      if (next == here) break;
      [heap[here], heap[next]] = [heap[next], heap[here]];
      here = next;
    }
    return ret;
  }
}

// dijkstra
let pq = new Heap();
pq.push([k, 0]);
let visited = new Array(n + 1).fill(-1);
visited[k] = 0;
while (pq.heap.length > 0) {
  let [cur_v, cur_w] = pq.pop();
  adj[cur_v].forEach((next) => {
    const [v, w] = next;
    if (visited[v] === -1 || visited[v] > visited[cur_v] + w) {
      visited[v] = visited[cur_v] + w;
      pq.push([v, visited[v]]);
    }
  });
}

let answer = "";
visited.forEach((val, idx) => {
  if (idx > 0) {
    if (val === -1) answer += "INF\n";
    else answer += String(val) + "\n";
  }
});
console.log(answer.trimEnd());
