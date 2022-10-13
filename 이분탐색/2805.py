N, M = map(int, input().split())
height = list(map(int, input().split()))


left = 0
right = 1000000001
while(left+1 < right):
    mid = (left + right)//2
    sum = 0
    for i in height:
        if(i-mid > 0):
            sum = sum + (i-mid)
    
    if(sum < M):
        right = mid
    else:
        left = mid

print(left)

