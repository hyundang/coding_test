N = int(input())

for i in range(1, N):
    for j in range(0, N-i):
        print(' ', end='')
    print('*', end='')
    for k in range(0, i*2-3):
        print(' ', end='')
    if(i != 1):
        print('*', end='')
    print()

for i in range(0, N*2-1):
    print('*', end='')