def solution(word):
    return int(''.join(list(map(str, sorted(map(int, str(word)), reverse=True)))))
    
    

print(solution(118372))