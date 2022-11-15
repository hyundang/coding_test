import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = int(input())
    days = list(map(int, input().split()))
    max = days[-1]
    profit = 0
    for i in range(len(days)-1, -1, -1):
        # print(i)
        if(days[i] > max):
            max = days[i]
        else:
            profit += max - days[i]
    print("#{} {}".format(test_case, profit))