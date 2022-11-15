import sys
sys.stdin = open("input.txt", "r")

T = 10
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = int(input())
    heights = list(map(int, input().split()))
    cnt = 0

    for i in range(2, len(heights)):
        if(heights[i-2] < heights[i] and heights[i-1] < heights[i] and heights[i+1] < heights[i] and heights[i+2] < heights[i]):
            Max = max(heights[i-2],heights[i-1],heights[i+1],heights[i+2])
            cnt += heights[i]-Max

    print("#{} {}".format(test_case, cnt))