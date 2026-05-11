let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}

function highlight() {
    getBoldItems();
    allBoldItems.forEach(item => item.style.color = 'blue');
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => item.style.color = 'black');
}

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

// 🌟 Exercice 4 : Volume of a sphere
const sphereForm = document.getElementById('MyForm');

sphereForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const radius = document.getElementById('radius').value;
    const volumeInput = document.getElementById('volume');
    
    if (!isNaN(radius) && radius !== "") {
        // Formula: V = 4/3 * π * r³
        const volume = (4/3) * Math.PI * Math.pow(Number(radius), 3);
        volumeInput.value = volume.toFixed(2);
    }
});