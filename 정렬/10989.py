import sys

N = int(input())

arr = [0 for i in range(0, 10001)]

for i in range(0, N):
    x = int(input())
    arr[x] = arr[x] + 1

for i in range(0, 10001):
    for j in range(0, arr[i]):
        sys.stdout.write(str(i)+"\n")