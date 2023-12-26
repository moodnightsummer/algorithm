while True:
    a, b = map(int, input().split())

    item = "neither"
    if a < b:
        if b % a == 0: item = "factor"
    elif a > b:
        if a % b == 0: item = "multiple"
    else:
        break
    
    print(item)