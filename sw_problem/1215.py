import sys
sys.stdin = open("input.txt", "r")

def isRight(arr):
    # print(arr)
    length = len(arr)
    if(length%2 == 0):
        return arr[0:length//2] == list(reversed(arr[length//2:]))
    else:
        return arr[0:length//2] == list(reversed(arr[length//2+1:]))

T = 10
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = int(input())
    matrix = []
    for i in range(8):
        arr = list(input())
        matrix.append(arr)

    answer = 0
    for i in range(8):
        for j in range(8):
            if(i+n <= 8):
                arr = []
                for k in range(n):
                    arr.append(matrix[i+k][j])
                if(isRight(arr)): answer += 1
            if(j+n <= 8 and isRight(matrix[i][j:j+n])):
                answer += 1

    print("#{} {}".format(test_case, answer))