let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt', "utf-8")
    .trim()
    .split("\n");

let n = Number(input[0]), m = Number(input[1]);
let adj = Array.from({length: n+1}, () => new Array());
input.slice(2, m + 2).forEach((e) => {
    let [from, to, price] = e.split(' ').map(Number);
    adj[from].push([to, price]);
});
// 이 부분이 있냐 없냐에 따라 시간초과가 나게 됨 -> 와이?????
adj.map((e) => e.sort((a, b) => a[1] - b[1]));
let [start, end] = input[m + 2].split(' ').map(Number);

// 최소힙
class Heap {
    constructor() {
        this.heap = [];
    }

    push(newValue) {
        const heap = this.heap;
        heap.push(newValue);
        let index = heap.length - 1, parent = Math.floor((index - 1) / 2);
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
            let left = here * 2 + 1, right = here * 2 + 2;
            if(left >= heap.length) break
            let next = here;
            if(heap[next][1] > heap[left][1]) next = left;
            if (right < heap.length && heap[next][1] > heap[right][1]) next = right;
            if (next === here) break;
            [heap[here], heap[next]] = [heap[next], heap[here]];
            here = next;
        }
        return ret;
    }
}

// dijkstra
let visited = new Array(n + 1).fill(-1);
let queue = new Heap();
queue.push([start, 0]);
visited[start] = 0;
while(queue.heap.length > 0) {
    [cur, price] = queue.pop();
    adj[cur].forEach((e) => {
        if(visited[e[0]]==-1 || visited[e[0]] > visited[cur]+e[1]){
            visited[e[0]] = visited[cur]+e[1];
            queue.push(e);
        }
    })
}

console.log(visited[end]);