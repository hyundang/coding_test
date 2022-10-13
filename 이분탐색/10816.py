def LowBound(card, x):
    left = 0
    right = len(card)-1

    while(left < right):
        mid = (left + right)//2
        if(card[mid] >= x):
            right = mid
        else:
            left = mid + 1

    return right


def UpBound(card, x):
    left = 0
    right = len(card)-1
    
    while(left < right):
        mid = (left + right)//2
        if(card[mid] > x):
            right = mid
        else:
            left = mid + 1

    return right



N = int(input())
card = list(map(int, input().split()))
card.sort()


M = int(input())
data = list(map(int, input().split()))
output = [0 for i in range(M)]

for i in range(0, M):
    low = LowBound(card, data[i])
    up = UpBound(card, data[i])
    if(up == N-1 and card[N-1] == data[i]):
        up = up + 1
    output[i] = up-low

for i in output:
    print(i, end=' ')


