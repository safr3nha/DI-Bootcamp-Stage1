let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    // We will NOT see this modification in the 'user' variable.
    // Why? Because strings are passed by value. 'user' holds the original 
    // value "John", and changing 'client' doesn't affect it.

    let shopping = groceries;
    groceries.totalPrice = "35$";
    // YES, we will see this modification in 'shopping'.
    // Why? Objects are passed by reference. 'shopping' and 'groceries' 
    // point to the same space in memory.

    groceries.other.paid = false;
    // YES, we will see this in 'shopping' as well.
    // Why? Same reason as above; they both reference the same object, 
    // including the nested 'other' object.
}

cloneGroceries();