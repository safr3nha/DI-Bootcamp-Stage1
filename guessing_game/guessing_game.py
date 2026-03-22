import random

secret_number = random.randint(1, 100)
attempts = 7

print("Welcome to the Number Guessing Game!")

while attempts > 0:
    print(f"Attempts left: {attempts}")
    guess = int(input("Enter your guess: "))

    if guess == secret_number:
        print("You win! 🏆")
        break
    elif guess < secret_number:
        print("Too low! 📉")
    else:
        print("Too high! 📈")

    attempts -= 1

if attempts == 0:
    print(f"Game Over! The number was {secret_number}.")