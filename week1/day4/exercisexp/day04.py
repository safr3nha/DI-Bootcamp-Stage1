word = input("Enter word: ")
result = ""

for char in word:
    if len(result) == 0 or char != result[-1]:
        result += char

print(result)