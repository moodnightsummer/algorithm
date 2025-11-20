def solution(num_list):
    even_number_count = 0
    odd_number_count = 0
    for i in num_list:
        if i % 2 == 0:
            even_number_count = even_number_count + 1
        else:
            odd_number_count = odd_number_count + 1
    return [even_number_count, odd_number_count]
