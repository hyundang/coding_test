import sys
sys.stdin = open("input.txt", "r")

T = 10
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = input()
    sums = []

    matrix = []
    for i in range(100):
        arr = list(map(int, input().split()))
        sums.append(sum(arr))
        matrix.append(arr)

    total1 = 0
    total2 = 0
    for j in range(100):
        total3 = 0
        for i in range(100):
            total3 += matrix[i][j]
        sums.append(total3)
        total1 += matrix[j][j]
        total2 += matrix[99-j][j]
    sums.append(total1)
    sums.append(total2)
    print("#{} {}".format(test_case, max(sums)))
