N = int(input())

output = [0 for i in range(1000001)]

output[2] = 1
output[3] = 1

for i in range(4, 1000001):
    Min = 0
    if(i%2 == 0):
        Min = output[i//2] + 1
    if(i%3 == 0):
        if(Min == 0):
            Min = output[i//3] + 1
        else:
            Min = min(output[i//3]+1, Min)
    if(Min == 0):
        Min = output[i-1] + 1
    else:
        Min = min(output[i-1]+1, Min)
    output[i] = Min


print(output[N])