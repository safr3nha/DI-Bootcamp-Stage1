function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights?");
    } while (isNaN(nights) || nights === "" || nights === null);
    return Number(nights) * 140;
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Destination?");
    } while (!destination || typeof destination !== "string");
    
    if (destination === "London") return 183;
    if (destination === "Paris") return 220;
    return 300;
}

function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days?");
    } while (isNaN(days) || days === "" || days === null);
    
    let cost = Number(days) * 40;
    if (Number(days) > 10) cost *= 0.95;
    return cost;
}

function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    return hotel + plane + car;
}