keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)
{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
family = {"henri": 25, "davis": 12, "joao": 4, "pedro": 29}
total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    total_cost += price
    print(f"{name.capitalize()} has to pay ${price}")

print(f"Total cost: ${total_cost}")
Henri has to pay $15
Davis has to pay $10
Joao has to pay $10
Pedro has to pay $15
Total cost: $50
brand = {
    "name": "Safra",
    "creation_date": 1975,
    "creator_name": "Henri",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "Brazil": "green",
        "Argentina": "blue",
        "Ecuador": "yellow"
    }
}

brand["number_stores"] = 2

clients = ", ".join(brand["type_of_clothes"][:-1])
print(f"Safra's clients are people looking for {clients} and {brand['type_of_clothes'][-1]} clothes.")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

brand.pop("creation_date")

print(brand["international_competitors"][-1])

print(brand["major_color"]["Brazil"])

print(len(brand))

print(brand.keys())

more_on_safra = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_safra)
print(brand)
dict_keys(['name', 'creator_name', 'type_of_clothes', 'international_competitors', 'number_stores', 'major_color', 'country_creation'])
{'name': 'Safra', 'creator_name': 'Henri', 'type_of_clothes': ['men', 'women', 'children', 'home'], 'international_competitors': ['Gap', 'H&M', 'Benetton', 'Desigual'], 'number_stores': 10000, 'major_color': {'Brazil': 'green', 'Argentina': 'blue', 'Ecuador': 'yellow'}, 'country_creation': 'Spain', 'creation_date': 1975}
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
{'Mickey': 0, 'Minnie': 1, 'Donald': 2, 'Ariel': 3, 'Pluto': 4}
{0: 'Mickey', 1: 'Minnie', 2: 'Donald', 3: 'Ariel', 4: 'Pluto'}
{'Ariel': 0, 'Donald': 1, 'Mickey': 2, 'Minnie': 3, 'Pluto': 4}
