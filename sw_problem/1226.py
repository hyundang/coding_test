import sys
sys.stdin = open("input.txt", "r")

T = 10
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    input()
    matrix = []
    start = []
    end = []
    for i in range(16):
        ss = input()
        s_idx = ss.find('2')
        e_idx = ss.find('3')
        if (s_idx > -1):
            start = [len(matrix), s_idx]
        if (e_idx > -1):
            end = [len(matrix), e_idx]
        matrix.append(list(map(int, list(ss))))

    visited = [[0 for i in range(16)] for j in range(16)]
    queue = [start]
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    visited[start[0]][start[1]] = 1
    while len(queue) > 0:
        [x, y] = queue.pop(0)
        for i in range(4):
            if i+dx[i] >=0 and i+dx[i]<16 and y+dy[i]>=0 and y+dy[i]<16:
                if(matrix[x+dx[i]][y+dy[i]]==0 or matrix[x+dx[i]][y+dy[i]]==3):
                    if (visited[x + dx[i]][y + dy[i]] == 0):
                        visited[x+dx[i]][y+dy[i]] = 1
                        queue.append([x+dx[i],y+dy[i]])

    if visited[end[0]][end[1]] == 1:
        print("#{} {}".format(test_case, 1))
    else:
        print("#{} {}".format(test_case, 0))