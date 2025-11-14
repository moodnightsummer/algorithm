def solution(x):
    return x % sum(map(int, str(x))) == 0
    

print(solution(10))