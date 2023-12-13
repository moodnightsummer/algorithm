total = 0

for i in range(5):
    total = total + max(40, int(input()))

print(total // 5)