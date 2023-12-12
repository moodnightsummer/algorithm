case = int(input())
answer = ''

for i in range(case):
    number, code = list(input().split())
    for x in code:
        item = x
        answer += item*int(number)
        
    print(answer)
    answer = ''