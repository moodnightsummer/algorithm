a, b, c = map(int, input().split());
order = int(input());

second = c + order;
minute = b + ((c+order) // 60);
hour = a + (minute // 60);

print(f"{hour % 24} {minute % 60} {second % 60}");