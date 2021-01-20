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
        elif(arr1[i] > arr1[j]):
            arr2[k] = arr1[j]
            j = j+1
        else:
            arr2[k] = arr1[i]
            i = i+1

    for k in range(low, high+1):
        arr1[k] = arr2[k]

def mergeSort(arr1, arr2, low, high):
    if(low >= high): return
    mid = low + (high-low)//2
    mergeSort(arr1, arr2, low, mid)
    mergeSort(arr1, arr2, mid+1, high)
    merge(arr1, arr2, low, mid, high)


N, K = map(int, input().split())

arr_1 = list(map(int, input().split()))
arr_2 = [0]*N

mergeSort(arr_1, arr_2, 0, N-1)

print(arr_1[K-1])