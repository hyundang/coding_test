n, m = map(int, input().split())

num_two = 0
num_five = 0

i = 2
while(i <= n):
    num_two = num_two + n//i
    i = i*2
i = 5
while(i <= n):
    num_five = num_five + n//i
    i = i*5

i = 2
while(i <= m):
    num_two = num_two - m//i
    i = i*2
i = 5
while(i <= m):
    num_five = num_five - m//i
    i = i*5

i = 2
while(i <= n-m):
    num_two = num_two - (n-m)//i
    i = i*2
i = 5
while(i <= n-m):
    num_five = num_five - (n-m)//i
    i = i*5    

if(num_two >= num_five):
    print(num_five)
else:
    print(num_two)