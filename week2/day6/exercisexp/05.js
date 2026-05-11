const family = {
    father: "Abraham",
    mother: "Sarah",
    son: "Isaac"
};

for (let key in family) {
    console.log(key);
}

for (let key in family) {
    console.log(family[key]);
}