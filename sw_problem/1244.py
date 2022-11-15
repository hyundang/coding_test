import sys
sys.stdin = open("input.txt", "r")


def dfs(idx, cnt):
    global answer
    if(cnt==n):
        answer = max(int(''.join(num)), answer)
        return
    for i in range(idx, len(num)):
        for j in range(i+1, len(num)):
            if(num[i] <= num[j]):
                num[i], num[j] = num[j], num[i]
                dfs(i, cnt+1)
                num[i], num[j] = num[j], num[i]
    if(not answer and n > cnt):
        if((n-cnt)%2 != 0):
            num[-1], num[-2] = num[-2], num[-1]
        dfs(idx, n)

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    num, n = input().split()
    num = list(num)
    n = int(n)
    # print(num)
    answer = 0
    dfs(0, 0)
    print("#{} {}".format(test_case, answer))