def factorial(x):
    i = 1
    res = 1
    while(i <= x):
        res = res*i
        i = i+1
    return res

N, K = map(int, input().split())

print(factorial(N+K-1)//(factorial(N)*factorial(K-1))%1000000000)
