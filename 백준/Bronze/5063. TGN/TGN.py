test = int(input())

for _ in range(test):
    r, e, c = map(int, input().split())
    if e - c == r:
        print("does not matter")
    elif e - c > r:
        print("advertise")
    else:
        print("do not advertise")
