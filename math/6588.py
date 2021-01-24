import sys
import math

data = []
x = int(input())
while(x != 0):
    data.append(x)
    x = int(input())


prime = [1 for i in range(1000001)]
prime[1] = 0
for i in range(2, int(math.sqrt(1000000))):
    if(prime[i] == 1):
        j = 2
        x = i*j
        while(x < 1000001):
            prime[x] = 0
            j = j+1
            x = i*j
# print('okay')

output = [0 for i in range(1000001)]            
for i in range(3, 500001):
    if(output[2*i] == 0):
        for j in range(3, i+1):
            if(prime[j] == 1 and prime[2*i-j] == 1):
                a = []
                a.append(j)
                a.append(2*i-j)
                output[2*i] = a
                break


for i in data:
    if(output[i] == 0):
        print("GoldBach's conjecture is wrong")
    else:
        sys.stdout.write(str(i)+" = "+str(output[i][0])+" + "+str(output[i][1])+"\n")            
# print(output[1:10])