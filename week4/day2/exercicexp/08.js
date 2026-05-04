function makeJuice(size) {
    const ingredients = [];

    function addIngredients(item1, item2, item3) {
        ingredients.push(item1, item2, item3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        const p = document.createElement("p");
        p.textContent = sentence;
        document.body.appendChild(p);
    }

    addIngredients("apple", "carrot", "ginger");
    addIngredients("lemon", "mint", "honey");
    
    displayJuice();
}

makeJuice("large");