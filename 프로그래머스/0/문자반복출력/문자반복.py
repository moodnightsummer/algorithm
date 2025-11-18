def solution(my_string, n):
    return ''.join(list(map(lambda word: word * n, my_string)))
print(solution('hello', 3))