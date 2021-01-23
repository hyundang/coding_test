N = int(input())

data = list(map(int, input().split()))

dp = [0 for i in range(1001)]

for i in range(N):
    if(data[i] != 1):
        sum = max(dp[1:data[i]])
    else:
        sum = 0
    dp[data[i]] = sum + 1

print(max(dp))
# print(max(dp[1:3]))
# print(data)