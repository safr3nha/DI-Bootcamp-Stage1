// Ex 01
function funcOne() {
let a = 5;
if(a > 1) {
a = 3;
}
console.log(inside the funcOne function ${a});
}
funcOne();

inside the funcOne function 3

let a = 0;
function funcTwo() {
a = 5;
}
function funcThree() {
console.log(inside the funcThree function ${a});
}
funcThree();
funcTwo();
funcThree();

inside the funcThree function 0
inside the funcThree function 5

function funcFour() {
window.a = "hello";
}
function funcFive() {
console.log(inside the funcFive function ${a});
}
funcFour();
funcFive();

inside the funcFive function hello

let b = 1;
function funcSix() {
let b = "test";
console.log(inside the funcSix function ${b});
}
funcSix();

inside the funcSix function test

let c = 2;
if (true) {
let c = 5;
console.log(in the if block ${c});
}
console.log(outside of the if block ${c});

in the if block 5
outside of the if block 2

// Ex 02
const winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

10

// Ex 03
const isString = (val) => typeof val === 'string';
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

true
false

// Ex 04
const sum = (num1, num2) => num1 + num2;
console.log(sum(10, 20));

30

// Ex 05
function convertDec(kg) { return kg * 1000; }
console.log(convertDec(2));

2000

const convertExp = function(kg) { return kg * 1000; };
console.log(convertExp(3));

3000

const convertArrow = (kg) => kg * 1000;
console.log(convertArrow(5));

5000

// Ex 06
(function(kids, partner, loc, job) {
const sentence = You will be a ${job} in ${loc}, and married to ${partner} with ${kids} kids.;
console.log(sentence);
const p = document.createElement("p");
p.innerText = sentence;
document.body.appendChild(p);
})(2, "Ilana", "Tel Aviv", "Full-Stack Developer");

You will be a Full-Stack Developer in Tel Aviv, and married to Ilana with 2 kids.

// Ex 07
(function(user) {
const welcome = Welcome, ${user};
console.log(welcome);
const nav = document.querySelector(".navbar");
if (nav) {
const div = document.createElement("div");
div.innerHTML = <span>${user}</span>;
nav.appendChild(div);
}
})("John");

Welcome, John

// Ex 08
function makeJuice(size) {
const ingredients = [];
function addIngredients(i1, i2, i3) {
ingredients.push(i1, i2, i3);
}
function displayJuice() {
const res = The client wants a ${size} juice, containing ${ingredients.join(", ")}.;
console.log(res);
const div = document.createElement("div");
div.innerText = res;
document.body.appendChild(div);
}
addIngredients("apple", "banana", "orange");
addIngredients("mint", "strawberry", "lemon");
displayJuice();
}
makeJuice("large");

The client wants a large juice, containing apple, banana, orange, mint, strawberry, lemon.