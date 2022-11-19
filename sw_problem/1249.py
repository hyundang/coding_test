import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = int(input())
    matrix = []
    for i in range(n):
        arr = list(map(int, list(input())))
        matrix.append(arr)

    queue = [[0,0]]
    visited = [[-1 for _ in range(n)] for i in range(n)]
    visited[0][0] = 0
    d_x = [0, 1, 0, -1]
    d_y = [1, 0, -1, 0]
    while(len(queue) > 0):
        [cur_x, cur_y] = queue.pop(0)
        for i in range(4):
            if(cur_x+d_x[i]>=0 and cur_x+d_x[i]<n and cur_y+d_y[i]>=0 and cur_y+d_y[i]<n):
                if (visited[cur_x+d_x[i]][cur_y+d_y[i]] == -1 or visited[cur_x+d_x[i]][cur_y+d_y[i]] > visited[cur_x][cur_y] + matrix[cur_x+d_x[i]][cur_y+d_y[i]]):
                    visited[cur_x+d_x[i]][cur_y+d_y[i]] = visited[cur_x][cur_y] + matrix[cur_x+d_x[i]][cur_y+d_y[i]]
                    queue.append([cur_x+d_x[i], cur_y+d_y[i]])

    print("#{} {}".format(test_case, visited[n-1][n-1]))

