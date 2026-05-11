// Os Dados (Assets)
const robots = [
    { id: 1, name: 'amit', email: 'amit@123.com', image: 'https://robohash.org/1?200x200' },
    { id: 2, name: 'joccky', email: 'joccky@123.com', image: 'https://robohash.org/2?200x200' },
    { id: 3, name: 'henri', email: 'henri@123.com', image: 'https://robohash.org/3?200x200' },
    { id: 4, name: 'aron', email: 'aron@123.com', image: 'https://robohash.org/4?200x200' },
    { id: 5, name: 'zion', email: 'zion@123.com', image: 'https://robohash.org/5?200x200' },
    { id: 6, name: 'maria', email: 'maria@123.com', image: 'https://robohash.org/6?200x200' },
    { id: 7, name: 'joao', email: 'joao@123.com', image: 'https://robohash.org/7?200x200' },
    { id: 8, name: 'Nicholas Runolfsdottir V', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
    { id: 9, name: 'Glenna Reichert', email: 'Chaim_McDermott@dana.io', image:'https://robohash.org/9?200x200' },
    { id: 10, name: 'Clementina DuBuque', email: 'Rey.Padberg@karina.biz', image:'https://robohash.org/10?200x200' }
];

const container = document.getElementById('robotContainer');
const searchBox = document.getElementById('searchBox');

const displayRobots = (robotArray) => {
    container.innerHTML = "";

    robotArray.forEach((robot) => {
        const { name, email, image } = robot;

        // 
        const card = `
            <div class="card">
                <img src="${image}" alt="robot">
                <h2>${name}</h2>
                <p>${email}</p>
            </div>
        `;
        
        container.innerHTML += card;
    });
};

// Evento de digitação na barra de pesquisa
searchBox.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    
   
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(text);
    });

    
    displayRobots(filteredRobots);
});

// Inicializar a página com todos os robôs
displayRobots(robots);