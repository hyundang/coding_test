import sys
sys.stdin = open("input.txt", "r")

d_x = [1, 0, -1, 0]
d_y = [0, 1, 0, -1]
def dfs(x, y, cnt, ss):
    global answer
    ss += str(matrix[x][y])
    if(cnt==6):
        answer.append(int(ss))
        return
    for i in range(4):
        if(x+d_x[i]>=0 and x+d_x[i]<4 and y+d_y[i]>=0 and y+d_y[i]<4):
            dfs(x+d_x[i], y+d_y[i], cnt+1, ss)


T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    answer = []
    matrix = []
    for i in range(4):
        arr = input().split()
        matrix.append(arr)

    for i in range(4):
        for j in range(4):
            ss = dfs(i, j, 1, "")

    print(answer)