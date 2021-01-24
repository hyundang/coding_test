N = int(input())
data = list(map(int, input().split()))

sosu = [1 for i in range(1001)]
sosu[1] = 0
for i in range(2, 1001):
    if(sosu[i] == 1):
        j = 2
        x = i*j
        while(x < 1001):
            sosu[x] = 0
            j = j+1
            x = i*j

output = 0
for i in data:
    output = output + sosu[i]

print(output)
# print(sosu[1:10])