
from queue import PriorityQueue
import sys
sys.stdin = open('input.txt', 'r')
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n,m = map(int, input().split())
    adj = [[] for i in range(n+1)]
    visited = [-1 for i in range(n+1)]
    weights = [[0, 0] for i in range(n+1)]
    que = PriorityQueue()
    for i in range(m):
        a,b,x,y = map(int, input().split())
        adj[a].append([b,x,y])
        adj[b].append([a,x,y])
    visited[1] = 0
    que.put((0, 1, 0, 0))
    while(que.qsize() > 0):
        (cost, v, sum_x, sum_y) = que.get()
        # print(cost, v)
        for new_v in adj[v]:
            [u, x, y] = new_v
            if(visited[u]==-1):
                new_x = sum_x + x
                new_y = sum_y + y
                weights[u] = [new_x, new_y]
                visited[u] = new_x * new_y
                que.put((visited[u], u, new_x, new_y))
            else:
                [prev_x, prev_y] = weights[u]
                new_x = sum_x + x
                new_y = sum_y + y
                if(visited[u] > sum_x*sum_y):
                    weights[u] = [new_x, new_y]
                    visited[u] = new_x * new_y
                    que.put((visited[u], u, new_x, new_y))
    print(visited[2])