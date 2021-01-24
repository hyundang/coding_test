N, B = map(int, input().split())

output = []
x = N%B
if(x > 9):
    output.append(chr(x+55))
else:
    output.append(x)
N = N//B
while(N != 0):
    x = N%B
    if(x > 9):
        output.insert(0, chr(x+55))
    else:
        output.insert(0, x)
    N = N//B

for i in output:
    print(i, end='')
