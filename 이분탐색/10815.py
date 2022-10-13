import sys

def Search(card, x):
    left = -1
    right = len(card)
    isExist = 0

    while(left+1 < right):
        mid = (left + right)//2
        if(card[mid] < x):
            left = mid
        elif(card[mid] > x):
            right = mid
        else:
            isExist = 1
            break
    
    return isExist



N = int(sys.stdin.readline().strip())
card = list(map(int, sys.stdin.readline().split()))
card.sort()
card.append(0)

M = int(sys.stdin.readline().strip())
data = list(map(int, sys.stdin.readline().split()))


output = []
MIN = min(card)
MAX = max(card)
for i in data:
    output.append(Search(card, i))

for i in output:
    sys.stdout.write(str(i)+' ')