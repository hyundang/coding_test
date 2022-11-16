import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n, k = map(int, input().split())
    infos = []
    for i in range(n):
        infos.append(list(map(int, input().split())))

    val = [[0 for i in range(k+1)] for i in range(n+1)]
    for i in range(n+1):
        for v in range(k+1):
            if (i == 0 or v == 0):
                val[i][v] = 0
            elif (infos[i-1][0] <= v):
                val[i][v] = max(infos[i-1][1]+val[i-1][v-infos[i-1][0]], val[i-1][v])
            else:
                val[i][v] = val[i-1][v]
                
    print("#{} {}".format(test_case, val[n][k]))
