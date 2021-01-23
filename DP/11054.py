N = int(input())

data = list(map(int, input().split()))


output = [0 for i in range(N)]
for i in range(N):
    if(i != 0):
        dp1 = [0 for x in range(1001)]
        for j in range(i):
            sum_1 = 0
            if(data[j] != 1):
                sum_1 = max(dp1[1:data[j]])
            dp1[data[j]] = sum_1 + 1
        if(data[i] != 1):
            output[i] = max(dp1[1:data[i]])
        else:
            output[i] = 0

    if(i < N-1):
        dp2 = [0 for x in range(1001)]
        for j in range(i+1, N):
            sum_2 = 0
            if(data[N+i-j] != 1):
                sum_2 = max(dp2[1:data[N+i-j]])
            dp2[data[N+i-j]] = sum_2 + 1
        if(data[i] != 1):
            output[i] = output[i] + max(dp2[1:data[i]])
    # 자기 자신 포함
    output[i] = output[i] + 1

print(max(output))
# print(output)