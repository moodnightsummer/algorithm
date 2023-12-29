test = int(input())

for _ in range(test):
    y = 0 
    k = 0

    for i in range(9):
        y_score, k_score = map(int, input().split())

        y += y_score
        k += k_score
    
    if y > k:
        print('Yonsei')
    elif k > y:
        print('Korea')
    else:
        print('Draw')