N = int(input())

output = [[0 for i in range(2)] for i in range(91)]

output[1][1] = 1
for i in range(2, 91):
    output[i][0] = output[i-1][0] + output[i-1][1]
    output[i][1] = output[i-1][0]

print(output[N][0] + output[N][1])