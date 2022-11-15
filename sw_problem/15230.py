import sys
sys.stdin = open('input.txt', 'r')
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    ss = input()
    cnt = 0
    next = 97
    for i in range(len(ss)):
        if (next+i > 122): break
        if(ss[i]==chr(next+i)):
            cnt += 1
        else:
            break

    print('#{0} {1}'.format(test_case, cnt))