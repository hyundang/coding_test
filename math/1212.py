import math

def Convert(a):
    res = []
    i = 0
    while(i<3):
        res.append(int(a%2))
        a = a//2
        i = i+1
    res.reverse()
    return res

N = input()

if(len(N) == 1 and N[0] == '0'):
    print(0)
else:
    output = []
    for i in range(len(N)):
        a = Convert(int(N[i]))
        if(i == 0):
            isZero = True
            if(a[0] != 0):
                isZero = False
                output.append(a[0])
            if(a[1] != 0 or not isZero):
                output.append(a[1])
                isZero = False
            if(a[2] != 0 or not isZero):
                output.append(a[2])
        else:
            for j in a:
                output.append(j)


    for i in range(len(output)):
        print(output[i], end='')