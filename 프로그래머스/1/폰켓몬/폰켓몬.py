def solution(nums):
    getItemNums = len(nums) // 2
    phoneketmon = list(set(nums))

    if len(phoneketmon) > getItemNums:
        return getItemNums
    return len(phoneketmon)


print(solution([3,1,2,3]))