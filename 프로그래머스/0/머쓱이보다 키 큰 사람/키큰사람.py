def solution(array, height):
    sortArray = sorted(array, reverse=True)

    count = 0
    for i in range(len(sortArray)):
        if sortArray[i] > height: count=count+1

        if sortArray[i] < height: break

    return count
        
        

print(solution([149, 180, 192, 170], 167))