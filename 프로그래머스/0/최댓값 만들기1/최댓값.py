def solution(numbers):
    sorteArray = sorted(numbers, reverse=True)

    return sorteArray[0] * sorteArray[1]


print(solution([1,2,3,4,5]))