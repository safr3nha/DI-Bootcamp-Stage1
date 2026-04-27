def displayNumbersDivisible(divisor=23):
    total_sum = 0
    divisible_numbers = []

    for number in range(501):
        if number % divisor == 0:
            divisible_numbers.append(number)
            total_sum += number

    # Printing the numbers separated by a space
    print(*(divisible_numbers))
    print(f"Sum : {total_sum}")

# Running the function
displayNumbersDivisible(23)
stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

shopping_list = ["banana", "orange", "apple"]

def my_bill():
    total_price = 0
    
    for item in shopping_list:
        # Check if the item exists in stock AND if the quantity is greater than 0
        if item in stock and stock[item] > 0:
            price = prices[item]
            total_price += price
            
    return total_price

# Calling the function
print(f"Total bill: {my_bill()}")
def changeEnough(itemPrice, amountOfChange):
    values = [0.25, 0.10, 0.05, 0.01]
    total = 0
    
    for i in range(4):
        total += amountOfChange[i] * values[i]
        
    return total >= itemPrice

print(changeEnough(4.25, [25, 20, 5, 0]))
print(changeEnough(14.11, [2, 100, 0, 0]))
print(changeEnough(0.75, [0, 0, 20, 5]))
def hotelCost():
    while True:
        nights = input("How many nights would you like to stay? ")
        if nights.isdigit():
            return int(nights) * 140

def planeRideCost():
    while True:
        destination = input("What is your destination? ").strip().capitalize()
        if destination and not destination.isdigit():
            if destination == "London":
                return 183
            elif destination == "Paris":
                return 220
            else:
                return 300

def rentalCarCost():
    while True:
        days = input("How many days would you like to rent the car? ")
        if days.isdigit():
            days = int(days)
            cost = days * 40
            if days > 10:
                cost *= 0.95
            return cost

def totalVacationCost():
    hotel = hotelCost()
    plane = planeRideCost()
    car = rentalCarCost()
    total = hotel + plane + car
    
    print(f"The car cost: ${car:.2f}, the hotel cost: ${hotel}, the plane tickets cost: ${plane}.")
    return total

totalVacationCost()
How many nights would you like to stay? 2
What is your destination? sp
How many days would you like to rent the car? 2
The car cost: $80.00, the hotel cost: $280, the plane tickets cost: $300.
const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");

lists[0].children[1].textContent = "Richard";

lists[1].children[1].remove();

for (let list of lists) {
    list.children[0].textContent = "SeuNome";
}

for (let list of lists) {
    list.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const allLis = document.querySelectorAll("li");
for (let li of allLis) {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
    if (li.textContent === "Richard") {
        li.style.border = "1px solid black";
    }
}

document.body.style.fontSize = "18px";
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newListTag = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newListTag.appendChild(logoutText);

const ulElement = navDiv.querySelector("ul");
ulElement.appendChild(newListTag);

const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);