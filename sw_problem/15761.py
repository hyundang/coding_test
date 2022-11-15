

def solution(a, b):
    max = "0b"
    min = "0b1"
    for _ in range(a):
        max += "1"
    for _ in range(b):
        max+="0"
        min+="0"
    for _ in range(a-1):
        min+="1"
    max = int(max, 2)
    min = int(min, 2)
    res = bin(max * min)
    print(res.count("1"))

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    import sys
    sys.stdin = open('input.txt', 'r')
    T = int(input())
    # 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
    for test_case in range(1, T + 1):
        a,b = map(int, input().split())
        solution(a, b)