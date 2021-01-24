import math

N, B = map(str, input().split())
B = int(B)

sum = 0
for i in range(1, len(N)+1):
    x = N[len(N)-i]
    if(ord(x) >= 65):
        x = ord(x) - 55
    else:
        x = int(x)
    sum = sum + x*math.pow(B, i-1)

print(int(sum))
