str = input()

if(len(str) == 0):
    print(0)
elif(str[0] == '0'):
    print(0)
else:
    dp = [0 for i in range(len(str))]
    dp[0] = 1
    for i in range(1, len(dp)):
        if(str[i] != '0'):
            dp[i] = (dp[i] + dp[i-1]) % 1000000

        x = int(str[i-1]+str[i])
        if(x>=10 and x<=26):
            if(i > 2):
                dp[i] = (dp[i] + dp[i-2]) % 1000000
            else:
                dp[i] = (dp[i] + 1) % 1000000

    print(dp[-1] % 1000000)
# print(dp)