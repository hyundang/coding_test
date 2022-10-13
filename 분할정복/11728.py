n, m =  map(int, input().split())
arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))

idx1 = 0
idx2 = 0

res = []

for i in range(n+m):
    if (idx1 >= n):
        res.append(arr2[idx2])
        idx2 += 1
        continue
    
    if (idx2 >=m):
        res.append(arr1[idx1])
        idx1 += 1
        continue

    if (arr1[idx1] > arr2[idx2]):
        res.append(arr2[idx2])
        idx2 += 1
    else:
        res.append(arr1[idx1])
        idx1 += 1
        
for i in range(n+m):
    print(res[i], end=' ')
