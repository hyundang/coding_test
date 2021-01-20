# stack 문제

class Node:
    def __init__(self, x, nextNode):
        self.value = x
        self.next = nextNode

class Stack:
    def __init__(self):
        self.Top = None
        self.Size = 0
    
    def push(self, x):
        newNode = Node(x, self.Top)
        self.Size = self.Size + 1
        self.Top = newNode

    def pop(self):
        if(self.Size == 0): return -1
        x = self.Top.value
        self.Top = self.Top.next
        self.Size = self.Size - 1
        return x

    def size(self):
        return self.Size


data = input()

stack = Stack()
sum = 0
isRight = False
for i in range(len(data)):
    if(data[i] == '('):
        stack.push('(')
        isRight = False
    else:
        if(not isRight):
            stack.pop()
            sum = sum + stack.size()
            isRight = True
        else:
            stack.pop()
            sum = sum + 1
            isRight = True

print(sum)