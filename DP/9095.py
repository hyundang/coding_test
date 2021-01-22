T = int(input())

data = []
for i in range(T):
    data.append(int(input()))

output = [0 for i in range(12)]
output[1] = 1
output[2] = 2
output[3] = 4
for i in range(4,12):
    output[i] = output[i-1] + output[i-2] + output[i-3]

for i in data:
    print(output[i])