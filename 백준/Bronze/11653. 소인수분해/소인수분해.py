def prime_factorization(x):
    factors = int()
    i = 2

    while i <= x:
        if x % i == 0:
            factors = i
            x = x / i
            print(factors)
        else:
            i = i + 1


prime_factorization(int(input()))