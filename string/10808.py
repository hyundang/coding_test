str = input()

output = [0 for i in range(26)]
for i in range(len(str)):
    output[ord(str[i])-ord('a')] = output[ord(str[i])-ord('a')] + 1

for i in range(len(output)):
    print(output[i], end='')
    if(i != len(output) - 1):
        print(end=' ')