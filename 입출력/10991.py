N = int(input())

for i in range(1, N+1):
    for j in range(0, N-i):
        print(' ', end='')
    for k in range(0, i):
        print('*', end='')
        if(k != i-1):
            print(' ', end='')
    print()