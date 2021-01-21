str = input()

output= [-1 for i in range(26)]

for i in range(len(str)):
    if(output[ord(str[i])-ord('a')] == -1):
        output[ord(str[i])-ord('a')] = i

for i in range(26):
    print(output[i], end='')
    if(i != 25):
        print(end=' ')