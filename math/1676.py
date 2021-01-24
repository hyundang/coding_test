N = int(input())

output = 0
for i in range(1, N+1):
    if(i%5==0):
        x = i
        y = 0
        while(x%5 ==0):
            x = x // 5
            y = y + 1          
        output = output + y

print(output)