N = int(input())
data = []
for i in range(N):
    (A, B) = map(int, input().split())
    data.append((A,B))

for i in range(N):
    a = data[i][0]
    b = data[i][1]
    n = a%b
    while(n != 0):
        a = b
        b = n
        n = a%b

    m = (data[i][0]//b)*(data[i][1]//b)*b
    print(m)