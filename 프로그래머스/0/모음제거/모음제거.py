def solution(my_string):
    through = ['a', 'e', 'i', 'o', 'u']
    
    return ''.join(list(map(lambda x: x if x not in through or x == ' ' else '', my_string)))
