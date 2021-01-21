str = input()
str = list(str)

for i in range(len(str)):
    if(ord(str[i])>64 and ord(str[i])<91):
        str[i] = chr(ord(str[i])+13)
        if(ord(str[i]) > 90):
            str[i] = chr(ord(str[i])-26)
    elif(ord(str[i])>96 and ord(str[i])<123):
        str[i] = chr(ord(str[i])+13)
        if(ord(str[i]) > 122):
            str[i] = chr(ord(str[i])-26)

for i in range(len(str)):
    print(str[i], end='')