A, B = map(int, input().split())

if(A < B):
    temp = A
    A = B
    B = temp

a = A
b = B
n = a%b
while(n != 0):
    a = b
    b = n
    n = a%b

for i in range(b):
    print(1,end='')