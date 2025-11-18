def solution(money):
    ea = money // 5500
    rest = money - (ea * 5500)

    return [ea, rest]

    