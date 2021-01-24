import math

N = list(input())
N.reverse()

output = []
sum = 0
for i in range(len(N)):
    sum = sum + int(N[i])*math.pow(2, i%3)
    if(i%3 == 2):
        output.append(int(sum))
        sum = 0
    elif(i == len(N)-1):
        output.append(int(sum))

output.reverse()
for i in output:
    print(i, end='')