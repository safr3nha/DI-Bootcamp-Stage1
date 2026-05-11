const container = document.getElementById("container");
console.log(container);

document.querySelectorAll(".list")[0].children[1].textContent = "Richard";
document.querySelectorAll(".list")[1].children[1].remove();

document.querySelectorAll(".list").forEach(ul => {
    ul.firstElementChild.textContent = "Henri";
    ul.classList.add("student_list");
});

const firstUl = document.querySelector(".list");
firstUl.classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const listItems = document.querySelectorAll("li");
listItems.forEach(li => {
    if (li.textContent === "Dan") li.style.display = "none";
    if (li.textContent === "Richard") li.style.border = "1px solid black";
});

document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
    alert("Hello Henri and Richard");
}