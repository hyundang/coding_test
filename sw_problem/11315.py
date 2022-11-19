import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = int(input())
    matrix = []
    for i in range(n):
        arr = list(input())
        matrix.append(arr)

    answer = 0
    for i in range(n):
        for j in range(n):
            if(matrix[i][j]=='o'):
                # 가로
                k = 1
                while(k<5):
                    if(j+k==n): break
                    if(matrix[i][j+k]!='o'): break
                    k += 1
                if(k==5): answer += 1
                # 세로
                k = 1
                while (k < 5):
                    if (i + k == n): break
                    if (matrix[i+k][j] != 'o'): break
                    k += 1
                if (k == 5): answer += 1
                # 오른쪽 아래
                k = 1
                while (k < 5):
                    if (j + k == n or i+k == n): break
                    if (matrix[i+k][j + k] != 'o'): break
                    k += 1
                if (k == 5): answer += 1
                # 왼쪽 아래
                k = 1
                while (k < 5):
                    if (i + k == n or j-k <0): break
                    if (matrix[i+k][j - k] != 'o'): break
                    k += 1
                if (k == 5): answer += 1
            if(answer > 0):break
        if(answer > 0): break
    if(answer > 0):
        print("#{} {}".format(test_case, "YES"))
    else:
        print("#{} {}".format(test_case, "NO"))
