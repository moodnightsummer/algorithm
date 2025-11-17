def solution(n):
    count = 0

    for i in range(n+1):
        if i == 0:
            continue

        if n % i == 0:
            count = count + 1

    return count
solution(100)