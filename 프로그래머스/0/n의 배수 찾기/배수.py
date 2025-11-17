def solution(n, numlist):
    return list(filter(lambda i : i % n == 0, numlist))

print(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]))