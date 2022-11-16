import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    infos = []
    for i in range(m):
        infos.append(list(map(int, input().split())))

    matrix = [[0 for i in range(n)] for i in range(n)]
    matrix[n//2-1][n//2-1] = matrix[n//2][n//2] = 'W'
    matrix[n//2][n//2-1] = matrix[n//2-1][n//2] = 'B'

    for info in infos:
        [x, y, isBlack] = info
        if (isBlack == 1):
            matrix[y-1][x-1] = 'B'
            # 오른쪽 탐색
            i = 1
            flag = False
            while (x-1+i < n):
                if (matrix[y-1][x-1+i] == 0):
                    break
                if (matrix[y-1][x-1+i] == 'B'):
                    flag = True
                    break
                i += 1
            if (flag):
                matrix[y-1][x-1:x-1+i] = ['B']*i
            # 왼쪽 탐색
            i = 1
            flag = False
            while (x-1-i >= 0):
                if (matrix[y-1][x-1-i] == 0):
                    break
                if (matrix[y-1][x-1-i] == 'B'):
                    flag = True
                    break
                i += 1
            if (flag):
                matrix[y-1][x-i:x] = ['B']*i
            # 아래쪽 탐색
            i = 1
            flag = False
            while (y-1+i < n):
                if (matrix[y-1+i][x-1] == 0):
                    break
                if (matrix[y-1+i][x-1] == 'B'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1+j][x-1] = 'B'
            # 위쪽 탐색
            i = 1
            flag = False
            while (y-1-i >= 0):
                if (matrix[y-1-i][x-1] == 0):
                    break
                if (matrix[y-1-i][x-1] == 'B'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1-j][x-1] = 'B'
            # 오른쪽 위 대각선 탐색
            i = 1
            flag = False
            while (x-1+i < n and y-1-i >= 0):
                if (matrix[y-1-i][x-1+i] == 0):
                    break
                if (matrix[y-1-i][x-1+i] == 'B'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1-j][x-1+j] = 'B'
            # 오른쪽 아래 대각선 탐색
            i = 1
            flag = False
            while (x-1+i < n and y-1+i < n):
                if (matrix[y-1+i][x-1+i] == 0):
                    break
                if (matrix[y-1+i][x-1+i] == 'B'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1+j][x-1+j] = 'B'
            # 왼쪽 위 대각선 탐색
            i = 1
            flag = False
            while (x-1-i >= 0 and y-1-i >= 0):
                if (matrix[y-1-i][x-1-i] == 0):
                    break
                if (matrix[y-1-i][x-1-i] == 'B'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1-j][x-1-j] = 'B'
            # 왼쪽 위 대각선 탐색
            i = 1
            flag = False
            while (x-1-i >= 0 and y-1+i < n):
                if (matrix[y-1+i][x-1-i] == 0):
                    break
                if (matrix[y-1+i][x-1-i] == 'B'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1+j][x-1-j] = 'B'

        else:
            matrix[y-1][x-1] = 'W'
            matrix[y-1][x-1] = 'W'
            # 오른쪽 탐색
            i = 1
            flag = False
            while (x-1+i < n):
                if (matrix[y-1][x-1+i] == 0):
                    break
                if (matrix[y-1][x-1+i] == 'W'):
                    flag = True
                    break
                i += 1
            if (flag):
                matrix[y-1][x-1:x-1+i] = ['W']*i
            # 왼쪽 탐색
            i = 1
            flag = False
            while (x-1-i >= 0):
                if (matrix[y-1][x-1-i] == 0):
                    break
                if (matrix[y-1][x-1-i] == 'W'):
                    flag = True
                    break
                i += 1
            if (flag):
                matrix[y-1][x-i:x] = ['W']*i
            # 아래쪽 탐색
            i = 1
            flag = False
            while (y-1+i < n):
                if (matrix[y-1+i][x-1] == 0):
                    break
                if (matrix[y-1+i][x-1] == 'W'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1+j][x-1] = 'W'
            # 위쪽 탐색
            i = 1
            flag = False
            while (y-1-i >= 0):
                if (matrix[y-1-i][x-1] == 0):
                    break
                if (matrix[y-1-i][x-1] == 'W'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1-j][x-1] = 'W'
            # 오른쪽 위 대각선 탐색
            i = 1
            flag = False
            while (x-1+i < n and y-1-i >= 0):
                if (matrix[y-1-i][x-1+i] == 0):
                    break
                if (matrix[y-1-i][x-1+i] == 'W'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1-j][x-1+j] = 'W'
            # 오른쪽 아래 대각선 탐색
            i = 1
            flag = False
            while (x-1+i < n and y-1+i < n):
                if (matrix[y-1+i][x-1+i] == 0):
                    break
                if (matrix[y-1+i][x-1+i] == 'W'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1+j][x-1+j] = 'W'
            # 왼쪽 위 대각선 탐색
            i = 1
            flag = False
            while (x-1-i >= 0 and y-1-i >= 0):
                if (matrix[y-1-i][x-1-i] == 0):
                    break
                if (matrix[y-1-i][x-1-i] == 'W'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1-j][x-1-j] = 'W'
            # 왼쪽 위 대각선 탐색
            i = 1
            flag = False
            while (x-1-i >= 0 and y-1+i < n):
                if (matrix[y-1+i][x-1-i] == 0):
                    break
                if (matrix[y-1+i][x-1-i] == 'W'):
                    flag = True
                    break
                i += 1
            if (flag):
                for j in range(1, i):
                    matrix[y-1+j][x-1-j] = 'W'
        
        # print(matrix)

    b_cnt = w_cnt = 0
    for row in matrix:
        b_cnt += row.count('B')
        w_cnt += row.count('W')
    # print(matrix)
    print("#{} {} {}".format(test_case, b_cnt, w_cnt))
