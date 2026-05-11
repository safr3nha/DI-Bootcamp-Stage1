const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people[people.indexOf("James")] = "Jason";
people.push("Henri");

console.log(people.indexOf("Mary"));

const peopleCopy = people.slice(1, 3);

console.log(people.indexOf("Foo"));

let last = people[people.length - 1];

for (let person of people) {
    console.log(person);
}

for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}