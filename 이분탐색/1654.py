K, N = map(int, input().split())

data = []
for i in range(K):
    data.append(int(input()))

left = 1
right = max(data)+1
mid = 0
while(left+1 < right):
    mid = (right + left)//2
    sum = 0
    for i in data:
        sum = sum + i//mid
    if(sum < N):
        right = mid
    else:
        left = mid

print(left)
