user_input = input("Enter words separated by commas: ")

words_list = user_input.split(',')

words_list.sort()

result = ",".join(words_list)

print(result)