N = int(input())

for i in range(0, N):
    for j in range(0, N-i):
        print('*', end='')
    print()