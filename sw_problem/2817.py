import sys
sys.stdin = open("input.txt", "r")
import itertools

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n, k = map(int, input().split())
    nums = list(map(int, input().split()))

    answer = 0
    for i in range(1, n+1):
        nPr = itertools.combinations(nums, i)
        for el in nPr:
            if(sum(el) == k): answer += 1

    print("#{} {}".format(test_case, answer))