// 1. Resolve immediately with value 3
const fastResolve = Promise.resolve(3);
fastResolve.then(val => console.log("Resolved value:", val));

// 2. Reject immediately with "Boo!"
const fastReject = Promise.reject("Boo!");
fastReject.catch(err => console.log("Rejected error:", err));