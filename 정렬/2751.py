def merge(arr1, arr2, low, mid, high):
    i = low
    j = mid+1
    for k in range(low, high+1):
        if(i > mid): 
            arr2[k] = arr1[j]
            j = j+1
        elif(j > high):
            arr2[k] = arr1[i]
            i = i+1
        elif(arr1[i]> arr1[j]):
            arr2[k] = arr1[j]
            j = j+1
        else:
            arr2[k] = arr1[i]
            i = i+1
    for k in range(low, high+1):
        arr1[k] = arr2[k]


def mergesort(arr1, arr2, low, high):
    if(low >= high): return
    mid = low + (high - low) // 2
    mergesort(arr1, arr2, low, mid)
    mergesort(arr1, arr2, mid+1, high)
    merge(arr1, arr2, low, mid, high)


N = int(input())

a = []
b = []
for i in range(0, N):
    a.append( int(input()) )
    b.append(0)

mergesort(a, b, 0, N-1)

for i in range(0, N):
    print(a[i])
