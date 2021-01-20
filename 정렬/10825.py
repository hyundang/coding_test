#x=0, 2
def mergeUp(arr1, arr2, low, mid, high, x):
    i = low
    j = mid+1
    for k in range(low, high+1):
        if(i > mid):
            arr2[k] = arr1[j]
            j = j+1
        elif(j > high):
            arr2[k] = arr1[i]
            i = i+1
        elif(x==2):
            if(arr1[i][1]==arr1[j][1]):
                if(arr1[i][x] > arr1[j][x]):
                    arr2[k] = arr1[j]
                    j = j+1
                else:
                    arr2[k] = arr1[i]
                    i = i+1
            else:
                arr2[k] = arr1[i]
                i = i+1
        elif(x==0):
            if(arr1[i][1]==arr1[j][1] and arr1[i][2]==arr1[j][2] and arr1[i][3]==arr1[j][3]):
                if(arr1[i][x] > arr1[j][x]):
                    arr2[k] = arr1[j]
                    j = j+1
                else:
                    arr2[k] = arr1[i]
                    i = i+1
            else:
                arr2[k] = arr1[i]
                i = i+1
        

    for k in range(low, high+1):
        arr1[k] = arr2[k]


#x=1,3
def mergeDown(arr1, arr2, low, mid, high, x):
    i = low
    j = mid+1
    for k in range(low, high+1):
        if(i > mid):
            arr2[k] = arr1[j]
            j = j+1
        elif(j > high):
            arr2[k] = arr1[i]
            i = i+1
        elif(x==1):
            if(arr1[i][x] > arr1[j][x]):
                arr2[k] = arr1[i]
                i = i+1
            else:
                arr2[k] = arr1[j]
                j = j+1
        elif(x==3):
            if(arr1[i][1]==arr1[j][1] and arr1[i][2]==arr1[j][2]):
                if(arr1[i][x] > arr1[j][x]):
                    arr2[k] = arr1[i]
                    i = i+1
                else:
                    arr2[k] = arr1[j]
                    j= j+1
            else:
                arr2[k] = arr1[i]
                i = i+1

    for k in range(low, high+1):
        arr1[k] = arr2[k]



def mergeSort(arr1, arr2, low, high, x):
    if(low >= high): return
    mid = low + (high-low)//2
    mergeSort(arr1, arr2, low, mid, x)
    mergeSort(arr1, arr2, mid+1, high, x)
    if(x==0 or x==2):
        mergeUp(arr1, arr2, low, mid, high, x)
    else:
        mergeDown(arr1, arr2, low, mid, high, x)



N = int(input())

arr_1=[]
arr_2=[]

for i in range(0, N):
    name, kor, eng, math = input().split()
    arr_1.append((name, int(kor), int(eng), int(math)))
    arr_2.append(0)

mergeSort(arr_1, arr_2, 0, N-1, 1)
mergeSort(arr_1, arr_2, 0, N-1, 2)
mergeSort(arr_1, arr_2, 0, N-1, 3)
mergeSort(arr_1, arr_2, 0, N-1, 0)

for i in range(0, N):
    print(arr_1[i][0])

