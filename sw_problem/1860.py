import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n, m, k = map(int, input().split())
    times = list(map(int, input().split()))
    times.sort()

    last = times[-1]
    cnts = [0 for i in range(last+1)]
    i = 0
    cnt = 0
    while(i <= last):
        cnts[i:i+m] = [cnt]*m
        i += m
        cnt += k

    total = 1
    flag = True
    for time in times:
        if(cnts[time] < total):
            flag = False
            break
        else:
            total += 1
    
    if(flag): print("#{} {}".format(test_case, "Possible"))
    else: print("#{} {}".format(test_case, "Impossible"))