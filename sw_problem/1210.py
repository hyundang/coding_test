import sys
sys.stdin = open("input.txt", "r")

T = 10
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    input()
    matrix = []
    for i in range(100):
        matrix.append(list(map(int, input().split())))

    lst = []
    for idx in range(100):
        if matrix[0][idx] == 1:
            i = 0
            j = idx
            while i < 100:
                if(j > 0 and matrix[i][j-1] == 1):
                    while(j > 0 and matrix[i][j-1] == 1):
                        j -= 1
                    i += 1
                elif (j < 99 and matrix[i][j+1] == 1):
                    while (j < 99 and matrix[i][j+1] == 1):
                        j += 1
                    i += 1
                else:
                    i += 1
            if matrix[i-1][j] == 2:
                print("#{} {}".format(test_case, idx))
