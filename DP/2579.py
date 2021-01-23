N = int(input())

data = []
for i in range(N):
    data.append(int(input()))

dp = [0 for i in range(N)]
if(N > 3):
    dp[0] = data[0]
    dp[1] = data[0] + data[1]
    dp[2] = max(data[0]+data[2], data[1]+data[2])
    for i in range(3, N):
        dp[i] = max(dp[i-3]+data[i-1]+data[i], dp[i-2]+data[i])
elif(N == 3):
    dp[2] = max(data[0]+data[2], data[1]+data[2])
elif(N == 2):
    dp[1] = data[0] + data[1]
else:
    dp[0] = data[0]

print(dp[N-1])