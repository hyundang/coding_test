import sys
sys.stdin = open("input.txt", "r")

T = 10
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = int(input())
    heights = list(map(int, input().split()))
    for i in range(n):
        Min = min(heights)
        min_idx = heights.index(Min)
        Max = max(heights)
        max_idx = heights.index(Max)
        heights[min_idx] += 1
        heights[max_idx] -= 1
    print("#{} {}".format(test_case, max(heights)-min(heights)))