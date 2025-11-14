def solution(sides):
    arr = sorted(sides)
    
    return 1 if arr[0] + arr[1] > arr[2] else 2