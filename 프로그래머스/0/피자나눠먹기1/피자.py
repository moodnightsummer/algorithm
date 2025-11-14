def solution(person):
    return person // 7 if person % 7 == 0 else person // 7 +1

print(solution(15))