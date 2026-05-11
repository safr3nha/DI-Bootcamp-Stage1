function myMove() {
    const elem = document.getElementById("animate");
    const container = document.getElementById("container");
    
    let pos = 0;
    // O limite é a largura do container (400) menos a largura do quadrado (50)
    const limit = container.offsetWidth - elem.offsetWidth; 

    // Define o intervalo de 1ms
    const id = setInterval(frame, 1);

    function frame() {
        if (pos >= limit) {
            clearInterval(id); // Para a animação no limite
        } else {
            pos++; 
            elem.style.left = pos + "px"; // Move 1px para a direita
        }
    }
}