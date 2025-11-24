def solution(price):
    if 500000 <= price:
        return int(price - (price * 0.2))
    if 300000 <= price:
        return int(price - (price * 0.1))
    if 100000 <= price:
        return int(price - (price * 0.05))
    
    return price

print(solution(100010))