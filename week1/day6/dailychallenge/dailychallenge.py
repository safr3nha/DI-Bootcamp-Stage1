users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

result_1 = {}
for index, user in enumerate(users):
    result_1[user] = index
print(result_1)

result_2 = {}
for index, user in enumerate(users):
    result_2[index] = user
print(result_2)

result_3 = {}
users_sorted = sorted(users)
for index, user in enumerate(users_sorted):
    result_3[user] = index
print(result_3)