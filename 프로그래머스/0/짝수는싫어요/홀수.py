def solution(n):
    result = []
    for i in range(n + 1):
        if i % 2 != 0:
            result.append(i)
    
    return result