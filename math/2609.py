a, b = map(int, input().split())

A = a
B = b
#최대공약수 구하기
if(B > A):
    temp = A
    A = B
    B = temp

n = A%B
while(n != 0):
    A = B
    B = n
    n = A%B

#최소공배수 구하기
m = (a//B) * (b//B) * B

print(B)
print(m)