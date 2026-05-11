const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let letters = [];
for (let name of names) {
    letters.push(name[0]);
}
console.log(letters.sort().join(""));