// PART I: Alert após 2 segundos
setTimeout(function() {
    alert("Hello World");
}, 2000);

// PART II & III: Intervalo e Manipulação do DOM
const container = document.getElementById("container");
const btnClear = document.getElementById("clear");

// Função que cria o parágrafo
function addParagraph() {
    const newP = document.createElement("p");
    newP.textContent = "Hello World";
    container.appendChild(newP);

    // Verifica se atingiu 5 parágrafos para parar automaticamente
    const paragraphCount = container.querySelectorAll("p").length;
    if (paragraphCount >= 5) {
        stopTimer();
    }
}

// Inicia o intervalo (2 segundos)
let timerId = setInterval(addParagraph, 2000);

// Função para limpar o intervalo
function stopTimer() {
    clearInterval(timerId);
    console.log("Intervalo interrompido.");
}

// Evento de clique no botão
btnClear.addEventListener("click", stopTimer);