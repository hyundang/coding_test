N = int(input())

if(N != 0):
    output = []
    while(N != 0):
        if(N%-2 == 0):
            N = N//-2
            output.append(0)
        else:
            N = (N-1)//-2
            output.append(1)

    output.reverse()
    for i in output:
        print(i, end='')
else:
    print(0)