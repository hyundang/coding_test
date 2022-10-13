n = int(input())

paperMap = []
for i in range(n):
    data = list(map(int, input().split()))
    paperMap.append(data)

res_minus = 0
res_zero = 0
res_plus = 0


def findPaper(row, col, num):
    global res_minus
    global res_zero
    global res_plus
    if(num == 1):
        if(paperMap[row][col] == -1):
            res_minus += 1
        elif(paperMap[row][col] == 0):
            res_zero += 1
        elif(paperMap[row][col] == 1):
            res_plus += 1
        return paperMap[row][col]

    idx = num//3
    arr = [0 for i in range(9)]
    arr[0] = findPaper(row, col, idx)
    arr[1] = findPaper(row, col+idx, idx)
    arr[2] = findPaper(row, col+idx*2, idx)
    arr[3] = findPaper(row+idx, col, idx)
    arr[4] = findPaper(row+idx, col+idx, idx)
    arr[5] = findPaper(row+idx, col+idx*2, idx)
    arr[6] = findPaper(row+idx*2, col, idx)
    arr[7] = findPaper(row+idx*2, col+idx, idx)
    arr[8] = findPaper(row+idx*2, col+idx*2, idx)

    if(arr[0] == arr[1] == arr[2] == arr[3] == arr[4] == arr[5] == arr[6] == arr[7] == arr[8]):
        if(arr[0] == -1):
            res_minus -= 8
        elif(arr[0] == 0):
            res_zero -= 8
        elif(arr[0] == 1):
            res_plus -= 8
        return arr[0]
    else:
        return -2


findPaper(0, 0, n)
print(res_minus)
print(res_zero)
print(res_plus)
