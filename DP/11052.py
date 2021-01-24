N = int(input())

card = list(map(int, input().split()))

dp = [0 for i in range(N+1)]

for i in range(1, N+1):
    dp[i] = card[i-1]
for i in range(1, N+1):
    for j in range(1, i+1):
        if(i+j > N): break
        if(dp[i+j] < dp[i]+dp[j]):
            dp[i+j] = dp[i] + dp[j]

print(dp[N])
# print(dp)