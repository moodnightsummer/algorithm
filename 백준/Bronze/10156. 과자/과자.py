a, b, c = map(int, input().split())

if c - (a * b) > 0: print(0)
else: print(abs(c - (a * b)))