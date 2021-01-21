# 세그먼트 트리 문제

class Node:
    def __init__(self, x):
        self.value = x
        self.front = None
        self.next = None

class LinkedList:
    def __init__(self, N):
        self.curNode = None
        self.firstNode = None
        self.size = 0
    
    def push(self, node):
        if(self.size == 0):
            node.next = node
            node.front = node
            self.firstNode = node
            self.curNode = node
        else:
            node.front = self.curNode
            node.next = self.firstNode
            self.firstNode.front = node
            self.curNode.next = node
            self.curNode = self.curNode.next
        self.size = self.size + 1

    def delete(self):
        if(self.size != 0):
            if(self.size == 1):
                x = self.curNode.value
                self.curNode = None
                self.firstNode = None
            else:
                x = self.curNode.value
                self.curNode.front.next = self.curNode.next
                self.curNode.next.front = self.curNode.front
                self.curNode = self.curNode.next
            return x


N, K = map(int, input().split())

linkedlist = LinkedList(N)
for i in range(N):
    n = Node(i+1)
    linkedlist.push(n)

linkedlist.curNode = linkedlist.firstNode
print('<', end='')
for i in range(N):
    #이부분을 고쳐야 한다!!
    for j in range(K-1):
        linkedlist.curNode = linkedlist.curNode.next
    res = linkedlist.delete()
    print(res, end='')
    if(i != N-1):
        print(', ', end='')
print('>', end='')