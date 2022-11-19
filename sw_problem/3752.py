import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = int(input())
    sums = [0]
    nums = list(map(int, input().split()))
    for i in nums:
        sums = list(set(sums))
        for j in range(len(sums)):
            sums.append(i + sums[j])
    print(f'#{test_case} {len(set(sums))}')