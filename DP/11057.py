N = int(input())

output = [[0 for i in range(10)] for i in range(1001)]

for i in range(10):
    output[1][i] = 1

for i in range(2, 1001):
    for j in range(10):
        sum = 0
        for k in range(j,10):
            sum = sum + output[i-1][k]
        output[i][j] = sum

sum = 0
for i in range(10):
    sum = sum + output[N][i]

print(sum%10007)