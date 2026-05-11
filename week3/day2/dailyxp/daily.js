const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "yellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector(".listPlanets");

for (let planet of planets) {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        
        // Positioning moons around the planet
        moonDiv.style.left = (120 + (i * 10)) + "px"; 
        
        planetDiv.appendChild(moonDiv);
    }

    section.appendChild(planetDiv);
}