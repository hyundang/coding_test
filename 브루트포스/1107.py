N = input()
M = int(input())

btn = []
for i in range(M):
    btn = list(map(int, input().split()))

if(int(N) == 100):
    print(0)
else:
    res = 0
    num = ""
    for i in range(len(N)):
        if( not int(N[i]) in btn ):
            num = num + N[i]
            res  = res + 1
        else:
            isBig = False
            isLess = False
            if(int(N[i]) == 0):
                isBig = True
            elif(int(N[i]) == 9):
                isLess = True
            else:
                less = 0
                big = 0
                j = int(N[i]) - 1
                while(1):
                    if(not j in btn):
                        less = less + 1
                        break
                    if(j == -1):
                        isBig = True
                    j = j - 1
                
                k = int(N[i]) + 1
                while(1):
                    if(not k in btn):
                        big = big + 1
                        break
                    if(k == 10):
                        isLess = True
                    k = k + 1
                
                if(not(isBig or isLess)):
                    if(isBig <= isLess):
                        num = num + str(j)
                        res = res + 1
                    else:
                        num = num + str(k)
                        res = res + 1
