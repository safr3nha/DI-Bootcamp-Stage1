def display_message():
    print("I am learning about functions in Python.")

display_message()
I am learning about functions in Python.
def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")
One of my favorite books is Alice in Wonderland.
def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")
describe_city("Harish", "Israel")
Reykjavik is in Iceland.
Paris is in Unknown.
Harish is in Israel.
import random

def compare_numbers(user_number):
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

compare_numbers(50)
PS C:\Users\henri\Desktop\DI-Bootcamp-Stage1\week2\day2\exercisesx> & C:\Users\henri\AppData\Local\Python\bin\python.exe c:/Users/henri/Desktop/DI-Bootcamp-Stage1/week2/day2/exercisesxp/test.py
Fail! Your number: 50, Random number: 63
PS C:\Users\henri\Desktop\DI-Bootcamp-Stage1\week2\day2\exercisesxp>
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")

make_shirt()
make_shirt(size="medium")
make_shirt("small", "Code is Life")
make_shirt(text="Hello!", size="small")
The size of the shirt is large and the text is I love Python.
The size of the shirt is medium and the text is I love Python.
The size of the shirt is small and the text is Code is Life.
The size of the shirt is small and the text is Hello!.
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for name in magicians:
        print(name)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = f"{magicians[i]} the Great"

make_great(magician_names)
show_magicians(magician_names)
Harry Houdini the Great
David Blaine the Great
Criss Angel the Great
import random

def get_random_temp(season):
    if season == "winter":
        return round(random.uniform(-10, 10), 1)
    elif season == "spring" or season == "autumn":
        return round(random.uniform(11, 23), 1)
    elif season == "summer":
        return round(random.uniform(24, 40), 1)
    else:
        return round(random.uniform(-10, 40), 1)

def main():
    month = input("Enter the month number (1-12): ")
    
    if month in ['12', '1', '2']:
        season = "winter"
    elif month in ['3', '4', '5']:
        season = "spring"
    elif month in ['6', '7', '8']:
        season = "summer"
    else:
        season = "autumn"

    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("Nice weather.")
    elif 23 < temp <= 32:
        print("A bit warm, stay hydrated.")
    elif temp > 32:
        print("It’s really hot! Stay cool.")

main()
Enter the month number (1-12): 1
The temperature right now is -4.1 degrees Celsius.
Brrr, that’s freezing! Wear some extra layers today.