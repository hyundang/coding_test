# linkedlist 문제

class Node:
    def __init__(self, x, frontNode, nextNode):
        self.value = x
        self.front = frontNode
        self.next = nextNode

class LinkedList:
    def __init__(self):
        self.curNode = None
        self.size = 0
        self.isRight = True
        self.first = None

    def P(self, node):
        if(self.size == 0):
            self.curNode = node
            self.first = node
        elif(not self.isRight):
            self.curNode.front = node
            node.next = self.curNode
            self.curNode = self.curNode.front
            self.first = self.curNode
        else:
            if(self.curNode.next == None):
                node.next = None
            else:
                node.next = self.curNode.next
                node.next.front = node
            self.curNode.next = node
            node.front = self.curNode
            self.curNode = node
        self.size = self.size + 1

    
    def L(self):
        if(self.size != 0):
            if(self.curNode.front == None):
                self.isRight = False
            if(self.isRight):
                self.curNode = self.curNode.front

    def D(self):
        if(self.size != 0):
            if(self.curNode.next != None):
                self.curNode = self.curNode.next
            if(not self.isRight):
                self.isRight = True
    
    def B(self):
        if(self.isRight and self.size != 0):
            if(self.size == 1):
                self.curNode = None
                self.first = None
            elif(self.curNode.front == None):
                self.curNode = self.curNode.next
                self.curNode.front = None
                self.isRight = False
                self.first = self.curNode
            elif(self.curNode.next == None):
                self.curNode = self.curNode.front
                self.curNode.next = None
            else:
                x = self.curNode
                self.curNode = self.curNode.front
                self.curNode.next = x.next
                x.next.front = self.curNode

            self.size = self.size - 1

        

str = input()
linkedlist = LinkedList()
for i in range(len(str)):
    n = Node(str[i], None, None)
    linkedlist.P(n)

M = int(input())

insts = []
for i in range(M):
    inst = input().split()
    insts.append(inst)

for i in range(M):
    if(insts[i][0] == 'L'):
        linkedlist.L()
    elif(insts[i][0] == 'D'):
        linkedlist.D()
    elif(insts[i][0] == 'B'):
        linkedlist.B()
    else:
        n = Node(insts[i][1], None, None)
        linkedlist.P(n)


n = linkedlist.first
for i in range(linkedlist.size):
    print(n.value, end='')
    n = n.next
if(linkedlist.size == 0):
    print('')