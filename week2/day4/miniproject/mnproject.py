import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)

guessed_letters = []
errors = 0
max_errors = 6

def display_word(word, guessed_letters):
    display = ""
    for char in word:
        if char == " ":
            display += "  "
        elif char in guessed_letters:
            display += char + " "
        else:
            display += "* "
    return display.strip()

while errors < max_errors:
    print("\n" + display_word(word, guessed_letters))
    guess = input("Guess a letter: ").lower()

    if len(guess) != 1 or not guess.isalpha():
        print("Please enter a single letter.")
        continue

    if guess in guessed_letters:
        print(f"You already guessed '{guess}'. Try another one.")
        continue

    guessed_letters.append(guess)

    if guess in word:
        print("Good job!")
    else:
        errors += 1
        print(f"Wrong! Body parts added: {errors}/{max_errors}")

    if "*" not in display_word(word, guessed_letters):
        print("\n" + word)
        print("Congratulations! You won!")
        break
else:
    print("\nGame Over!")
    print(f"The word was: {word}")
    * * * * * * * * * * * *
Guess a letter: j
Wrong! Body parts added: 1/6

* * * * * * * * * * * *
Guess a letter: u
Wrong! Body parts added: 2/6

* * * * * * * * * * * *
Guess a letter: w
Wrong! Body parts added: 3/6

* * * * * * * * * * * *
Guess a letter: a
Wrong! Body parts added: 4/6

* * * * * * * * * * * *
Guess a letter: a
You already guessed 'a'. Try another one.

* * * * * * * * * * * *
Guess a letter: t
Good job!

* * t * * * * * * * * *
Guess a letter: 