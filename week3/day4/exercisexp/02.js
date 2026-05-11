const form = document.querySelector('form');
console.log(form);

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput, lnameInput);

const fnameByName = document.getElementsByName('firstname')[0];
const lnameByName = document.getElementsByName('lastname')[0];
console.log(fnameByName, lnameByName);

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page refresh to handle data with JS
    
    const fnameValue = fnameInput.value.trim();
    const lnameValue = lnameInput.value.trim();
    const ul = document.querySelector('.usersAnswer');

    if (fnameValue !== "" && lnameValue !== "") {
        const liFirst = document.createElement('li');
        const liLast = document.createElement('li');
        liFirst.textContent = fnameValue;
        liLast.textContent = lnameValue;
        ul.appendChild(liFirst);
        ul.appendChild(liLast);
    }
});