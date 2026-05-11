def clean_currency(value):
    return int(value.replace("$", "").replace(",", ""))

items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20",
    "Apple": "$2"
}

wallet_input = "$100"
wallet_amount = clean_currency(wallet_input)

affordable_items = []

for item, price_str in items_purchase.items():
    price = clean_currency(price_str)
    
    if wallet_amount >= price:
        affordable_items.append(item)
        wallet_amount -= price

if not affordable_items:
    print("Nothing")
else:
    affordable_items.sort()
    print(affordable_items)