const container = document.querySelector('.container2');
const colors = document.querySelectorAll('.color');
const clearBtn = document.getElementById('clear-btn');
let currentColor = '#000000';
let isDrawing = false;

for (let i = 0; i < 400; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    
    pixel.addEventListener('mousedown', () => {
        isDrawing = true;
        pixel.style.backgroundColor = currentColor;
    });

    pixel.addEventListener('mouseover', () => {
        if (isDrawing) {
            pixel.style.backgroundColor = currentColor;
        }
    });

    container.appendChild(pixel);
}

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

colors.forEach(color => {
    color.addEventListener('click', () => {
        currentColor = color.getAttribute('data-color');
    });
});

clearBtn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(p => p.style.backgroundColor = 'white');
});