async function getStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (response.status !== 200) {
            throw new Error("Error fetching data");
        }
        const data = await response.json();
        console.log(data.result);
    } catch (error) {
        console.log(error);
    }
}

getStarship();