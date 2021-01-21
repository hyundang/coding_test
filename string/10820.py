arr = []
while(True):
    try:
        a = input()
        arr.append(a)
    except:
        break

output = []
for i in range(len(arr)):
    small = 0
    large = 0
    num = 0
    space = 0  
    a = [] 
    
    for j in range(len(arr[i])):
        if(ord(arr[i][j]) == 32):
            space = space + 1

        elif(ord(arr[i][j]) <= 57):
            num = num + 1
        elif(ord(arr[i][j]) <= 90):
            large = large + 1
        else:
            small = small + 1
    
    a.append(small)
    a.append(large)
    a.append(num)
    a.append(space)
    output.append(a)

for i in range(len(output)):
    for j in range(len(output[i])):
        print(output[i][j], end='')
        if(j != len(output[i])-1):
            print(end=' ')
    print()