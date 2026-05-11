const delayedSuccess = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000); // 4000 milliseconds = 4 seconds
});

delayedSuccess.then(response => console.log(response));