const palette = document.getElementById('palette');
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clear');
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black', 'white'];

let color = null;
let drawing = false;

colors.forEach(c => {
    const div = document.createElement('div');
    div.className = 'color-opt';
    div.style.background = c;
    div.onclick = () => color = c;
    palette.insertBefore(div, clearBtn);
});

for (let i = 0; i < 2400; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    
    square.onmousedown = () => {
        if (color) {
            drawing = true;
            square.style.background = color;
        }
    };
    
    square.onmouseover = () => {
        if (drawing && color) square.style.background = color;
    };
    
    grid.appendChild(square);
}

window.onmouseup = () => drawing = false;

clearBtn.onclick = () => {
    document.querySelectorAll('.square').forEach(s => s.style.background = 'transparent');
};