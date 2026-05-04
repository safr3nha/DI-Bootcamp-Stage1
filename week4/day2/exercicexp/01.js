// EXERCISE 1 - SCOPE PRACTICE

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3; // Value changes from 5 to 3 here
    }
    alert(`inside the funcOne function ${a}`); 
}
// 1.1: It will alert "3" because the IF condition is true and updates the variable.
// 1.2: If we used 'const', it would CRASH (Error). You can't reassign a constant.


// #2
let a = 0; // Global variable starts at 0
function funcTwo() {
    a = 5; // This function changes the global 'a'
}
function funcThree() {
    alert(`inside the funcThree function ${a}`);
}
// 2.1: 
// First funcThree() -> Alerts "0" (the starting value).
// Then funcTwo() -> Changes global 'a' to 5.
// Second funcThree() -> Alerts "5" (the new value).
// 2.2: If 'a' was 'const', funcTwo would cause an error for trying to change it.


// #3
function funcFour() {
    window.a = "hello"; // This creates a global variable named 'a'
}
function funcFive() {
    alert(`inside the funcFive function ${a}`);
}
// 3.1: It alerts "hello". Because funcFour runs first, 'a' becomes available globally.


// #4
let a = 1; 
function funcSix() {
    let a = "test"; // This 'a' is local, it only lives inside this function
    alert(`inside the funcSix function ${a}`);
}
// 4.1: It alerts "test". The function looks at its own local 'a' first.
// 4.2: With 'const', the result is exactly the SAME. They are in different scopes, so it's allowed.


// #5
let a = 2;
if (true) {
    let a = 5; // This 'a' only exists inside these curly brackets
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);
// 5.1: First alert is "5", second alert is "2". The outside 'a' doesn't change.
// 5.2: With 'const', it’s the same thing. The code treats the two 'a's as separate things because of the block.