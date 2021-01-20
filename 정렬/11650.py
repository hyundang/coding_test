def merge(arr1, arr2, low, mid, high, x):
    i = low
    j = mid+1
    for k in range(low, high+1):
        if(i>mid):
            arr2[k] = arr1[j]
            j = j+1
        elif(j>high):
            arr2[k] = arr1[i]
            i = i+1
        elif(x==0):
            if(arr1[i][x]>arr1[j][x]):
                arr2[k] = arr1[j]
                j = j+1
            else:
                arr2[k] = arr1[i]
                i = i+1
        elif(x==1):
            if(arr1[i][0]==arr1[j][0] and arr1[i][x] > arr1[j][x]):
                arr2[k] = arr1[j]
                j = j+1
            elif(arr1[i][0]==arr1[j][0] and arr1[i][x] < arr1[j][x]):
                arr2[k] = arr1[i]
                i = i+1
            else:
                arr2[k] = arr1[i]
                i = i+1

    for k in range(low, high+1):
        arr1[k] = arr2[k]



def mergesort(arr1, arr2, low, high, x):
    if(low >= high): return
    mid = low + (high-low)//2
    mergesort(arr1, arr2, low, mid, x)
    mergesort(arr1, arr2, mid+1, high, x)
    merge(arr1, arr2, low, mid, high, x)

N = int(input())
arr_1= []
arr_2= []

for i in range(0, N):
    (a, b) = map(int, input().split())
    arr_1.append((a,b))
    arr_2.append((0,0))

mergesort(arr_1, arr_2, 0, N-1, 0)
mergesort(arr_1, arr_2, 0, N-1, 1)

for i in range(0, N):
    print(arr_1[i][0], end=' ')
    print(arr_1[i][1])