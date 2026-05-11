function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10. Success!`);
        } else {
            reject(`${num} is greater than 10. Error!`);
        }
    });
}

// Test Case 1: Rejects
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Test Case 2: Resolves
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));