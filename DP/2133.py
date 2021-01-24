N = int(input())

dp = [0 for i in range(31)]
dp[0] = 1
dp[2] = 3
for i in range(2,16):
    dp[2*i] = dp[2*i-2]*3
    for j in range(i-1):
        dp[2*i] = dp[2*i] + dp[2*j]*2

if(N%2 == 0):
    print(dp[N])
else:
    print(0)
