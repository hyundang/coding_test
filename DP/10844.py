N = int(input())

output = [[0 for i in range(10)] for i in range(101)]

for i in range(1, 10):
    output[1][i] = 1

for i in range(2, 101):
    for j in range(10):
        if(j == 0):
            output[i][j] = output[i-1][j+1]
        elif(j == 9):
            output[i][j] = output[i-1][j-1]
        else:
            output[i][j] = output[i-1][j-1] + output[i-1][j+1]


sum = 0
for i in range(10):
    sum = sum + output[N][i]

print(sum%1000000000)