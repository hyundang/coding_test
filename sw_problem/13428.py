import sys
sys.stdin = open("input.txt", "r")

import itertools

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    nums = list(input())
    length = len(nums)
    nCr = itertools.permutations([i for i in range(length)], 2)
    arr = [int(''.join(nums))]
    for i in nCr:
        (a, b) = i
        nums[a],nums[b] = nums[b],nums[a]
        if(nums[0]!= '0'):
            arr.append(int(''.join(nums)))
        nums[a],nums[b] = nums[b],nums[a]
    
    print("#{} {} {}".format(test_case, min(arr), max(arr)))