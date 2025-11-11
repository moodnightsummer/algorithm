# sum() 배열 합계
sumArray = [1, 2, 3, 4, 5]
print(sum(sumArray))

# min() 배열 내 가장 작은 값
minArray = [8, 3, 10, 2]
print(min(minArray))

# sorted() 함수
sortedArray = [9, 1, 4, 8, 2, 1, 3]
print(sorted(sortedArray)) # 오름차순

print(sorted(sortedArray, reverse = True)) # 내림차순

#람다 함수를 사용한 조건별 키 정렬
result = sorted([('홍길동', 35), ('이순신', 75), ('아무개', 50)], key = lambda x: x[1], reverse = True)
print(result) # [('이순신', 75), ('아무개', 50), ('홍길동', 35)]


# 반복문
for i in range(5):
    print(i)

condition = 0

while condition < 5:
    condition = condition + 1
    break
    continue

# 조건문

a = 1
b = 2

if a > b:
    print(f"{a} > {b}")
elif a == b:
    print("same")
else:
    print(f"{a} < {b}")

# 자료형
arr = [1, 2, 2, 3, 1, 1, 1]
arr.append(4)
print('뒤에 추가', arr)

arr.pop()
print('뒤에서 빼기', arr)

arr.remove(2)
print('탐색 후 값 제거', arr) # 값이 중복이면 하나만 제거

print('값 3의 인덱스 값 반환', arr.index(3))

print('값 1이 몇 개인지 갯수 반환', arr.count(1))
