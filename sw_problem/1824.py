import sys
sys.stdin = open("input.txt", "r")

import random

def do_inst(inst, idx):
    global memory, direction
    if(inst=='<'):
        direction = 'left'
    elif (inst == '<'):
        direction = 'right'
    elif (inst == '^'):
        direction = 'up'
    elif (inst == 'v'):
        direction = 'down'
    elif (inst == '_'):
        if(memory[idx] == 0): direction = 'right'
        else: direction = 'left'
    elif (inst == '|'):
        if(memory[idx] == 0): direction = 'down'
        else: direction = 'up'
    elif (inst == '?'):
        a = random.randint(1, 10)
        if a % 4 == 0: direction = 'right'
        elif a % 4 == 1: direction = 'left'
        elif a % 4 == 2: direction = 'up'
        else: direction = 'down'
    elif (inst == '+'):
        if(memory[idx] == 15):
            memory[idx] = 0
        else:
            memory[idx] += 1
    elif (inst == '-'):
        if(memory[idx] == 0):
            memory[idx] = 15
        else:
            memory[idx] -= 1

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    r, c = map(int, input().split())
    insts = []
    for i in range(r):
        insts.append(list(input()))

    memory = [0 for i in range(10)]
    direction = 'right'
