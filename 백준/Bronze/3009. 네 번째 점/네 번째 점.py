a, b = map(int, input().split())
c, d = map(int, input().split())
e, f = map(int, input().split())

x = [a, c, e]
y = [b, d, f]

# 결과를 저장할 변수 초기화
unique_values = []

# 리스트 순회
for x_item in x:
    # 리스트에서 한 번만 등장하는 경우 결과에 추가
    if x.count(x_item) == 1:
        unique_values.append(x_item)

# 결과를 저장할 변수 초기화
unique_y_values = ''

# 리스트 순회
for y_item in y:
    # 리스트에서 한 번만 등장하는 경우 결과에 추가
    if y.count(y_item) == 1:
        unique_values.append(y_item)

# 결과 출력
print(' '.join(map(str, unique_values)))