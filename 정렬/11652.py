N = int(input())

arr = []
for i in range(0, N):
    arr.append(int(input()))

arr.sort()


count = 1
max_count = 1
num = arr[0]

for i in range(0, N-1):
    if( arr[i]==arr[i+1] ):
        count = count + 1
    else:
        count = 1
    
    if( max_count < count ):
        max_count = count
        num = arr[i]

print(num)