plate = list(input())
now = str()
total = 0

for i in plate:
    if now == i:
        total = total + 5
    else:
        total = total + 10
    now = i

print(total)