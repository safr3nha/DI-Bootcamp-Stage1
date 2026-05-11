let number;
do {
    number = Number(prompt("Please enter a number:"));
} while (isNaN(number) || number < 10);