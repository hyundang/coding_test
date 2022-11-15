
import math
def lcm(a,b):
  return (a * b) // math.gcd(a,b)

def solution(str1, str2):
    LCM = lcm(len(str1), len(str2))
    a = b =  ""
    for i in range(LCM//len(str1)):
        a += str1
    for i in range(LCM//len(str2)):
        b += str2
    if(a==b): print("yes")
    else: print("no")

import sys
sys.stdin = open('input.txt', 'r')
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    str1, str2 = input().split()
    solution(str1, str2)
    # ///////////////////////////////////////////////////////////////////////////////////

