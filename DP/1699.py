N = int(input())

dp = [0 for i in range(100001)]

i = 1
while(i*i < 100000):
    dp[i*i] = 1
    i = i+1

dp[1] = 1
dp[2] = 2
for i in range(2,N+1):
    for j in range(1, i+1):
        if(i+j > 100000): break
        if(dp[i+j] == 0):
            dp[i+j] = dp[i] + dp[j]
        elif(dp[i+j] > dp[i]+dp[j]):
            dp[i+j] = dp[i] + dp[j]

print(dp[N])
# print(dp[1:10])