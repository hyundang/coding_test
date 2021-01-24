import math

N = int(input())

prime = [1 for i in range(10000001)]
prime[1] = 0
for i in range(2, int(math.sqrt(10000000))):
    if(prime[i] == 1):
        j = 2
        x = i*j
        while(x < 10000001):
            prime[x] = 0
            j = j + 1
            x = i*j


output = []
n = N
if(N != 1):
    while(N != 1):
        i = 2
        while(i<n+1):
            if(prime[i] == 1 and N%i==0):
                output.append(i)
                N = N//i
            else:
                i = i+1

for i in output:
    print(i)