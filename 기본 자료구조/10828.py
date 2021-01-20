#stack 문제

class Node:
    def __init__(self, value, node):
        self.value = value
        self.next = node

class Stack:
    def __init__(self):
        self.Top = None
        self.Size = 0

    def push(self, x):
        newNode = Node(x, self.Top)
        self.Top = newNode
        self.Size = self.Size + 1

    def pop(self):
        if(self.Size == 0): return -1
        x = self.Top.value
        self.Top = self.Top.next
        self.Size = self.Size - 1
        return x

    def size(self):
        return self.Size

    def empty(self):
        if (self.Size == 0): return 1
        else: return 0
    
    def top(self):
        if(self.Size == 0): return -1
        else: return self.Top.value

        


N = int(input())

insts = []
for i in range(0, N):
    inst = input().split()
    insts.append(inst)

stack = Stack()
for i in range(0, N):
    if(insts[i][0] == "push"):
        stack.push(int(insts[i][1]))
    elif(insts[i][0] == "pop"):
        x = stack.pop()
        print(x)
    elif(insts[i][0] == "size"):
        x = stack.size()
        print(x)
    elif(insts[i][0] == "empty"):
        x = stack.empty()
        print(x)
    elif(insts[i][0] == "top"):
        x = stack.top()
        print(x) 