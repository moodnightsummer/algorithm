case = int(input())
not_cute = 0
yes_cute = 0

for i in range(case):
    is_cute = int(input())
    if is_cute == 0:
        not_cute = not_cute + 1
    elif is_cute == 1:
        yes_cute = yes_cute + 1
    else:
        continue

if not_cute > yes_cute:
    print("Junhee is not cute!")
else:
    print("Junhee is cute!")