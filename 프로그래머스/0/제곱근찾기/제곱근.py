def solution(n):
    q = n ** 0.5
    return 1 if q % 1 == 0 else 2

print(solution(976))