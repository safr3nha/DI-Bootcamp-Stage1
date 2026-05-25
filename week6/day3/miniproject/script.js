const btn = document.getElementById('btn');
const displayArea = document.getElementById('display-area');

async function getCharacter() {
   
    displayArea.innerHTML = `<i class="fa-solid fa-spinner fa-spin fa-3x"></i><p>Loading...</p>`;
    
    try {
      
        const randomId = Math.floor(Math.random() * 83) + 1;
        
        
        const res = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!res.ok) throw new Error("Could not find character");
        
        const data = await res.json();
        const p = data.result.properties;

        
        const worldRes = await fetch(p.homeworld);
        const worldData = await worldRes.json();
        const worldName = worldData.result.properties.name;

        
        displayArea.innerHTML = `
            <h1>${p.name}</h1>
            <p>Height: ${p.height}</p>
            <p>Gender: ${p.gender}</p>
            <p>Birth Year: ${p.birth_year}</p>
            <p>Home World: ${worldName}</p>
        `;
    } catch (error) {
        /
        displayArea.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i><p>Oh no! That person is not available.</p>`;
    }
}

btn.addEventListener('click', getCharacter);