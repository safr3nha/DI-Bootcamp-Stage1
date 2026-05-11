function playSound(e) {
    // Pega o código da tecla (funciona tanto para evento de teclado quanto clique se adaptado)
    const keyCode = e.key ? e.key.toUpperCase() : e.currentTarget.getAttribute('data-key');
    
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) return; // Se a tecla não tiver áudio, para a função

    // Reinicia o som para permitir tocar várias vezes rápido
    audio.currentTime = 0; 
    audio.play();

    // Adiciona o efeito visual
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Pula se não for um transform
    this.classList.remove('playing');
}

// 1. Ouvir teclas do teclado
window.addEventListener('keydown', playSound);

// 2. Remover o efeito visual após a animação acabar
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// 3. (Opcional) Ouvir cliques do mouse
keys.forEach(key => key.addEventListener('click', playSound));