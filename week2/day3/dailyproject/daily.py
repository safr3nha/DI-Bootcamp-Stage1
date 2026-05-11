import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

found_pairs = []

for i in range(len(list_of_numbers)):
    for j in range(i + 1, len(list_of_numbers)):
        if list_of_numbers[i] + list_of_numbers[j] == target_number:
            found_pairs.append((list_of_numbers[i], list_of_numbers[j]))

for pair in found_pairs:
    print(f"{pair[0]} + {pair[1]} = {target_number}")