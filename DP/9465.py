T = int(input())

data = []
for i in range(T):
    n = int(input())
    sticker = []
    sticker_1 = list(map(int, input().split()))
    sticker_2 = list(map(int, input().split()))
    sticker.append(sticker_1)
    sticker.append(sticker_2)
    data.append(sticker)

# print(data[i][0], data[i][1]) -> 스티거 두 줄


isUp = True
output = []
for i in range(T):
    dp  = [[0 for j in range(len(data[i][0]))] for j in range(2)]
    dp[0][0] = data[i][0][0]
    dp[1][0] = data[i][1][0]
    dp[0][1] = data[i][0][1] + data[i][1][0]
    dp[1][1] = data[i][1][1] + data[i][0][0]
    
    for j in range(2, len(data[i][0])):
        MAX = dp[1][j-1] + data[i][0][j]
        if(dp[0][j-2] + data[i][0][j] > MAX):
            MAX = dp[0][j-2] + data[i][0][j]
        if(dp[1][j-2] + data[i][0][j] > MAX):
            MAX = dp[1][j-2] + data[i][0][j]
        dp[0][j] = MAX

        MAX = dp[0][j-1] + data[i][1][j]
        if(dp[1][j-2] + data[i][1][j] > MAX):
            MAX = dp[1][j-2] + data[i][1][j]
        if(dp[0][j-2] + data[i][1][j] > MAX):
            MAX = dp[0][j-2] + data[i][1][j]
        dp[1][j] = MAX 

    MAX = max(max(dp[0]), max(dp[1]))
    output.append(MAX)


for res in output:
    print(res)