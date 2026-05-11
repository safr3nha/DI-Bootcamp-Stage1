function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    let result = "";
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            result += i + " ";
            sum += i;
        }
    }
    console.log(result.trim());
    console.log("Sum : " + sum);
}

displayNumbersDivisible();