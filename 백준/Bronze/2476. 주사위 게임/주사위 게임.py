def sum(items):
    price = int()
    if items[0] == items[1] and items[0] == items[2] and items[1] == items[2]:
        price = 10000 + (items[0] * 1000)
    elif items[0] == items[1] or items[0] == items[2] or items[1] == items[2]:
        top = int()
        if items[0] == items[1]:
            top = items[0]
        elif items[1] == items[2]:
            top = items[1]
        else:
            top = items[0]
        price = 1000 + (100 * top)
    else:
        top = max(items)
        price = top * 100
    return price

test = int(input())

prices = []

for _ in range(test):
    items = list(map(int, input().split()))
    price = sum(items)
    prices.append(price)

print(max(prices))