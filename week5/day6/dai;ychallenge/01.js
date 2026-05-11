// Function 1: Check types and uppercase
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const allStrings = words.every(word => typeof word === "string");
        if (allStrings) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject("Error: Not all elements in the array are strings.");
        }
    });
}

// Function 2: Check length and sort
function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve([...words].sort()); // Spread operator to avoid mutating original
        } else {
            reject("Error: Array length must be greater than 4.");
        }
    });
}

// --- Test Cases ---

// 1. Fails at capitalization (contains a number)
makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log("Test 1 Result:", result))
    .catch(error => console.log("Test 1 Error:", error));

// 2. Fails at sorting (length is only 3)
makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log("Test 2 Result:", result))
    .catch(error => console.log("Test 2 Error:", error));

// 3. Success!
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log("Test 3 Result:", result)) 
    .catch(error => console.log("Test 3 Error:", error));