import math

def ConvertTen(datas, a):
    sum = 0
    for i in range(len(datas)):
        sum = sum + datas[i]*math.pow(a, i)
    return sum

def convertB(a, b):
    res = []
    res.append(a%b)
    a = a//b
    while(a != 0):
        res.append(a%b)
        a = a//b
    res.reverse()
    return res


A, B = map(int, input().split())
m = int(input())
data = list(map(int, input().split()))
data.reverse()

x = ConvertTen(data, A)
output = convertB(x, B)

for i in output:
    print(int(i), end=' ')