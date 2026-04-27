const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");

lists[0].children[1].textContent = "Richard";

lists[1].children[1].remove();

for (let list of lists) {
    list.children[0].textContent = "SeuNome";
}

for (let list of lists) {
    list.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const allLis = document.querySelectorAll("li");
for (let li of allLis) {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
    if (li.textContent === "Richard") {
        li.style.border = "1px solid black";
    }
}

document.body.style.fontSize = "18px";
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newListTag = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newListTag.appendChild(logoutText);

const ulElement = navDiv.querySelector("ul");
ulElement.appendChild(newListTag);

const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);