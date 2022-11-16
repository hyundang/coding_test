import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n, l = map(int, input().split())
    infos = []
    for i in range(n):
        infos.append(list(map(int, input().split())))

    v = [[0 for i in range(l+1)] for i in range(n+1)]
    for i in range(n+1):
        for w in range(l+1):
            if i==0 or w==0:
                v[i][w] = 0
            elif infos[i-1][1] <= w:
                v[i][w] = max(infos[i-1][0]+v[i-1][w-infos[i-1][1]], v[i-1][w])
            else:
                v[i][w] = v[i-1][w]
    print("#{} {}".format(test_case, v[n][l]))
