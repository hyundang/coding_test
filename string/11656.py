str = input()

output = []
for i in range(len(str)):
    output.append(str[i:-1]+str[-1])

output.sort()

for i in range(len(output)):
    print(output[i])
