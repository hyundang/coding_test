# stack 문제

class Node:
    def __init__(self, value, nextNode):
        self.value = value
        self.next = nextNode

class Stack:
    def __init__(self):
        self.Top = None
        self.size = 0
    
    def push(self, x):
        newNode = Node(x, self.Top)
        self.Top = newNode
        self.size = self.size + 1
    
    def pop(self):
        if(self.size == 0): return -1
        x = self.Top.value
        self.Top = self.Top.next
        self.size = self.size - 1
        return x
    
    def Empty(self):
        if(self.size == 0): return True
        else: return False



N = int(input())

data = []

res = 0
for i in range(N):
    data.append(input().split())

for i in range(N):
    stack = Stack()
    for j in range(len(data[i][0])):
        if(data[i][0][j] == '('):
            stack.push('(')
        else:
            res = stack.pop()
            if(res == -1): break

    if(res == -1 or (not stack.Empty())):
        print("NO")
    else:
        print("YES")