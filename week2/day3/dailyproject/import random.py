import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

seen_numbers = set()
pairs = set()

for number in list_of_numbers:
    complement = target_number - number
    if complement in seen_numbers:
        pair = tuple(sorted((number, complement)))
        pairs.add(pair)
    seen_numbers.add(number)

for p1, p2 in pairs:
    print(f"{p1} and {p2} sums to the target_number {target_number}")