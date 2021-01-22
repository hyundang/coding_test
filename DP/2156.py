N = int(input())

data = []
for i in range(N):
    data.append(int(input()))

dp = [0 for i in range(N)]

if(N > 3):
    dp[0] = data[0]
    dp[1] = data[0] + data[1]
    dp[2] = max(data[0]+data[1], data[0]+data[2], data[1]+data[2]) 
    i = 3
    while(i<N):
        max = dp[i-1]
        if(dp[i-2] + data[i] > max):
            max = dp[i-2] + data[i]
        if(dp[i-3] + data[i-1] + data[i] > max):
            max = dp[i-3] + data[i-1] + data[i]
        dp[i] = max
        i = i+1
    print(dp[N-1])
elif(N == 3):
    print(max(data[0]+data[1], data[0]+data[2], data[1]+data[2]))
elif(N == 2):
    print(data[0]+data[1])
else:
    print(data[0])