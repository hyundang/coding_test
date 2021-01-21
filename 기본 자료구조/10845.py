# 큐 문제

class Node:
    def __init__(self, x, nextNode):
        self.value = x
        self.next = nextNode

class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.Size = 0
    
    def push(self, x):
        if(self.Size == 0):
            newNode = Node(x, self.last)
            self.last = newNode
            self.first = newNode
        else:
            newNode = Node(x, self.last)
            self.last.next = newNode
            self.last = newNode
        self.Size = self.Size + 1
    
    def pop(self):
        if(self.Size == 0): return -1
        x = self.first.value
        self.first = self.first.next
        self.Size = self.Size - 1
        return x

    def size(self):
        return self.Size
    
    def empty(self):
        if(self.Size == 0): return 1
        else: return 0

    def front(self):
        if(self.Size == 0): return -1
        else: return self.first.value

    def back(self):
        if(self.Size == 0): return -1
        else: return self.last.value



N = int(input())

insts = []
queue = Queue()

for i in range(N):
    inst = input().split()
    insts.append(inst)

# print(insts)

for i in range(N):
    if(insts[i][0] == "push"):
        queue.push(int(insts[i][1]))
    elif(insts[i][0] == "pop"):
        x = queue.pop()
        print(x)
    elif(insts[i][0] == "size"):
        x = queue.size()
        print(x)
    elif(insts[i][0] == "empty"):
        x = queue.empty()
        print(x)
    elif(insts[i][0] == "front"):
        x = queue.front()
        print(x)
    else:
        x = queue.back()
        print(x)
