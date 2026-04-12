number = int(input("Enter number: "))
length = int(input("Enter length: "))

multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

print(multiples)
Enter number: 12
Enter length: 10
[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
word = input("Enter word: ")
result = ""

for char in word:
    if len(result) == 0 or char != result[-1]:
        result += char

print(result)
Enter word: hhenrii
henri