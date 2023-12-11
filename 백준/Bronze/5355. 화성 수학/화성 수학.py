def calculator(number, items):
    result = number
    for i in items:
        if(i == "@"):
            result = result * 3
        elif(i == "%"):
            result = result + 5
        elif(i == "#"):
            result = result - 7

    return result


testCase = int(input())

for i in range(testCase):
    array = list(input().split())
    number = float(array.pop(0))
    print("%0.2f" % calculator(number, array))