const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);
nav.querySelector("ul").appendChild(newLi);

const ulNav = nav.querySelector("ul");
console.log(ulNav.firstElementChild.textContent);
console.log(ulNav.lastElementChild.textContent);