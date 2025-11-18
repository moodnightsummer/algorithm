def solution(my_string, letter):
    return ''.join(list(filter(lambda i: i != letter,my_string)))