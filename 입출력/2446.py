N = int(input())

for i in range(1, N):
    for j in range(1, i):
        print(' ', end='')
    for k in range(0, (N-i)*2+1):
        print('*', end='')
    print()
for i in range(0, N):
    for j in range(1, N-i):
        print(' ', end='')
    for k in range(0, i*2+1):
        print('*', end='')
    print()