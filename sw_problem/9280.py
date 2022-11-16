import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    R = []
    W = []
    for i in range(n):
        R.append(int(input()))
    for i in range(m):
        W.append(int(input()))
    tower = [0 for i in range(n)]
    parked = [-1 for i in range(m)]
    wait = []
    total_cost = 0
    for i in range(2*m):
        idx = int(input())
        if(idx > 0):
            for i in range(n):
                if(tower[i]==0):
                    tower[i] = idx
                    parked[idx-1] = i
                    total_cost += R[i]*W[idx-1]
                    break
            if(parked[idx-1]==-1):
                wait.append(idx)
        else:
            if(len(wait) > 0):
                next = wait.pop(0)
                tower[parked[-idx-1]] = next
                parked[next-1] = parked[-idx-1]
                total_cost += R[parked[-idx-1]]*W[next-1]
            else:
                tower[parked[-idx-1]] = 0
    print("#{} {}".format(test_case, total_cost))