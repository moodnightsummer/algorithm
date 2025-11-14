def solution(n, t):
    sum = n

    for i in range(t):
        sum = sum * 2

    return sum

print(solution(2, 10))