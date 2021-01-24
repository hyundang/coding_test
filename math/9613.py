def GCD(a, b):
    if(b > a):
        temp = a
        a = b
        b = temp
    
    n = a%b
    while(n != 0):
        a = b
        b = n
        n = a%b
    
    return b
    

T = int(input())

data = []
for i in range(T):
    nums = list(map(int, input().split()))
    data.append(nums[1:len(nums)])


output = []
for i in range(T):
    sum = 0
    for j in range(len(data[i])):
        for k in range(j+1, len(data[i])):
            sum = sum + GCD(data[i][j], data[i][k])
    output.append(sum)

for i in range(len(output)):
    print(output[i])