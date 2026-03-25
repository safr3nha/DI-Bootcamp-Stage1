Python 3.14.2 (tags/v3.14.2:df79316, Dec  5 2025, 17:18:21) [MSC v.1944 64 bit (AMD64)] on win32
Enter "help" below or click "Help" above for more information.
my_fav_numbers = {7, 13, 22, 42}
my_fav_numbers.add(100)
my_fav_numbers.add(55)
my_fav_numbers.remove(55)
friend_fav_numbers = {3, 7, 88, 13}
ur_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(f"Meus números: {my_fav_numbers}")
Meus números: {100, 7, 42, 13, 22}
print(f"My favorite numbers: {my_fav_numbers}")
My favorite numbers: {100, 7, 42, 13, 22}
print(f"Friend's favorite numbers: {friend_fav_numbers}")
Friend's favorite numbers: {88, 3, 13, 7}
print(f"Our combined favorite numbers: {our_fav_numbers}")
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    print(f"Our combined favorite numbers: {our_fav_numbers}")
NameError: name 'our_fav_numbers' is not defined. Did you mean: 'ur_fav_numbers'?
print(f"Our combined favorite numbers: {our_fav_numbers}")
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    print(f"Our combined favorite numbers: {our_fav_numbers}")
NameError: name 'our_fav_numbers' is not defined. Did you mean: 'ur_fav_numbers'?
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(f"Our combined favorite numbers: {our_fav_numbers}")
Our combined favorite numbers: {3, 100, 7, 42, 13, 22, 88}
my_tuple = (10, 20, 30)
try:
    my_tuple.append(40)
except AttributeError:
    print("Error: Tuples do not have an .append() method because they are immutable.")
    my_tuple.append(40)
    basket = ["Banana", "Apples", "Oranges", "Blueberries"]
    basket.remove("Banana")
    basket.remove("Blueberries")
    basket.append("Kiwi")
    apple_count = basket.count("Apples")
    basket.clear()
    print=(f"Apples appeared {apple_count} times.")

  
Error: Tuples do not have an .append() method because they are immutable.
Traceback (most recent call last):
  File "<pyshell#29>", line 2, in <module>
    my_tuple.append(40)
AttributeError: 'tuple' object has no attribute 'append'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<pyshell#29>", line 5, in <module>
    my_tuple.append(40)
AttributeError: 'tuple' object has no attribute 'append'
 print=f"Apples appeared {apple_count} times."
 
SyntaxError: unexpected indent
print(f"Final state of the basket: {basket}")
Traceback (most recent call last):
  File "<pyshell#31>", line 1, in <module>
    print(f"Final state of the basket: {basket}")
NameError: name 'basket' is not defined
[DEBUG ON]
[DEBUG OFF]

========================================================== RESTART: Shell =========================================================
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
basket.clear()
print(f"Apples appeared {apple_count} times.")
Apples appeared 2 times.
print(f"Final state of the basket: {basket}")
Final state of the basket: []
mixed_sequence = []
for i in range(3, 11):
    number = i / 2
    mixed_sequence.append(number)
    print(f"Generated sequence: {mixed_sequence}")

    
Generated sequence: [1.5]
Generated sequence: [1.5, 2.0]
Generated sequence: [1.5, 2.0, 2.5]
Generated sequence: [1.5, 2.0, 2.5, 3.0]
Generated sequence: [1.5, 2.0, 2.5, 3.0, 3.5]
Generated sequence: [1.5, 2.0, 2.5, 3.0, 3.5, 4.0]
Generated sequence: [1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5]
Generated sequence: [1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]
print("--- Numbers from 1 to 20 ---")
for num in range(1, 21):
    print(num)
    
SyntaxError: multiple statements found while compiling a single statement
for num in range(1, 21):
    print(num)
    print("--- Numbers from 1 to 20 ---")

    
1
--- Numbers from 1 to 20 ---
2
--- Numbers from 1 to 20 ---
3
--- Numbers from 1 to 20 ---
4
--- Numbers from 1 to 20 ---
5
--- Numbers from 1 to 20 ---
6
--- Numbers from 1 to 20 ---
7
--- Numbers from 1 to 20 ---
8
--- Numbers from 1 to 20 ---
9
--- Numbers from 1 to 20 ---
10
--- Numbers from 1 to 20 ---
11
--- Numbers from 1 to 20 ---
12
--- Numbers from 1 to 20 ---
13
--- Numbers from 1 to 20 ---
14
--- Numbers from 1 to 20 ---
15
--- Numbers from 1 to 20 ---
16
--- Numbers from 1 to 20 ---
17
--- Numbers from 1 to 20 ---
18
--- Numbers from 1 to 20 ---
19
--- Numbers from 1 to 20 ---
20
--- Numbers from 1 to 20 ---
while True:
    user_name = input("Please enter your name: ")
    if not user_name.isdigit() and len(user_name) >= 3:
        print("Thank you!")
        break
    else:
        print("Invalid name. Please make sure it's not numbers and has at least 3 letters.")

        
Please enter your name: h
Invalid name. Please make sure it's not numbers and has at least 3 letters.
Please enter your name: henri
Thank you![
fav_fruits_input = input("Enter your favorite fruits (separated by a space): ")
Enter your favorite fruits (separated by a space): banana kiwi
fav_fruits_list = fav_fruits_input.split()
any_fruit = input("Enter the name of any fruit: ")
Enter the name of any fruit: kiwi
any_fruit = input("Enter the name of any fruit: ")                                                                                      if any_fruit in fav_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")
    
SyntaxError: invalid syntax
any_fruit = input("Enter the name of any fruit: ")
Enter the name of any fruit: kiwi
if any_fruit in fav_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
    else:
        
SyntaxError: invalid syntax
if any_fruit in fav_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
    else:
        
SyntaxError: invalid syntax
any_fruit = input("Enter the name of any fruit: ")
Enter the name of any fruit:    
if any_fruit in fav_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
    else:
    print("You chose a new fruit. I hope you enjoy it!")
    
SyntaxError: invalid syntax

========================================================== RESTART: Shell =========================================================
fav_fruits_input = input("Enter your favorite fruits (separated by a space): ")
Enter your favorite fruits (separated by a space): banana kiwi grape
fav_fruits_list = fav_fruits_input.split()
any_fruit = input("Enter the name of any fruit: ")
Enter the name of any fruit: kiwi
if any_fruit in fav_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
    else:
        
SyntaxError: invalid syntax
if any_fruit in fav_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")

    
You chose one of your favorite fruits! Enjoy!
else:
    
SyntaxError: invalid syntax
else:print("You chose a new fruit. I hope you enjoy it!")
SyntaxError: invalid syntax

========================================================== RESTART: Shell =========================================================
toppings = []
base_price = 10
topping_price = 2.50
while True:
    topping = input("Enter a topping (or 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    else:
        toppings.append(topping)
        print(f"Adding {topping} to your pizza.")

        
Enter a topping (or 'quit' to finish): yes
Adding yes to your pizza.
Enter a topping (or 'quit' to finish): quit
total_price = base_price + (len(toppings) * topping_price)




print(f"Toppings on your pizza: {', '.join(toppings)}")
Toppings on your pizza: yes
print(f"Total cost of the pizza: ${total_price:.2f}")
Total cost of the pizza: $12.50

========================================================== RESTART: Shell =========================================================
ages = []

======================= RESTART: Shell =======================
family_ages = [2, 10, 25]
total_cost = 0
print("--- Calculating Ticket Prices ---")
--- Calculating Ticket Prices ---
for age in family_ages:
    if age < 3:
        price = 0
...         print(f"Age {age}: Free")
...         elif 3 <= age <= 12:
...             
SyntaxError: invalid syntax
>>> 3 <= age <= 12:
...     
SyntaxError: invalid syntax
>>> 
======================= RESTART: Shell =======================
>>> family_ages = [2, 10, 25]
... total_cost = 0
SyntaxError: multiple statements found while compiling a single statement
>>> family_ages = [2, 10, 25]
... total_cost = 0
SyntaxError: multiple statements found while compiling a single statement
>>> 
>>> 
======================= RESTART: Shell =======================
>>> family_ages = [2, 10, 25]
>>> total_cost = 0
>>> 
>>> KeyboardInterrupt
>>> KeyboardInterrupt
>>> KeyboardInterrupt
>>> KeyboardInterrupt
>>> for age in family_age:
...     if age < 3:
...         price = 0
...         print(f"age{age}:free")
...         elif 3 <= age <=12
...         
SyntaxError: invalid syntax
>>> for age in family_age:
...     if age < 3:
...         price = 0
...         print(f"age{age}:free")
...         elif 3 <= age <=12:
...             
SyntaxError: invalid syntax
