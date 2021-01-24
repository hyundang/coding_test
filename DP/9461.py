T = int(input())

data = []
for i in range(T):
    data.append(int(input()))

dp = [0 for i in range(101)]
dp[1] = 1
dp[2] = 1

for i in range(3, 101):
    dp[i] = dp[i-3] + dp[i-2]

for i in data:
    print(dp[i])