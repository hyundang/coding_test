import sys
sys.stdin = open("input.txt", "r")

def bfs(start, n):
    queue = [start]
    # print(adj)
    visited = [0 for i in range(n+1)]
    visited[start] = 1
    while(len(queue) > 0):
        cur = queue.pop(0)
        for v in adj[cur]:
            if(visited[v]==0):
                queue.append(v)
                visited[v] = visited[cur] + 1
    return max(visited)

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    adj = [[] for i in range(n+1)]
    for i in range(m):
        u, v = map(int, input().split())
        adj[u].append(v)
        adj[v].append(u)

    answer = []
    if(m > 0):
        Max = 0
        for i in range(1, n+1):
            a = bfs(i, n)
            if(Max < a): Max = a
        print("#{} {}".format(test_case, Max))
    else:
        print("#{} {}".format(test_case, 1))


