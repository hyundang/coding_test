n = int(input())

output = [0 for i in range(1001)]

output[1] = 1
output[2] = 2

for i in range(3, 1001):
    output[i] = output[i-1] + output[i-2]

print(output[n]%10007)