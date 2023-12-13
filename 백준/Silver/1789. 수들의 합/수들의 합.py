n = int(input())
lists = []
number = 0
count = 0
while n > number:
    count = count+1
    number = number+count
    lists.append(count)

if number == n:
    print(len(lists))
else:
    print(len(lists)-1)