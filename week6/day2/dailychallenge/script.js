const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.getElementById('gifForm');
const container = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAll');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('searchTerm').value;

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`);
        const result = await response.json();
        
        const gifUrl = result.data.images.fixed_height.url;
        
        const wrapper = document.createElement('div');
        const img = document.createElement('img');
        const deleteBtn = document.createElement('button');

        img.src = gifUrl;
        deleteBtn.textContent = 'DELETE';
        
        deleteBtn.onclick = () => wrapper.remove();

        wrapper.appendChild(img);
        wrapper.appendChild(deleteBtn);
        container.appendChild(wrapper);
        
    } catch (error) {
        console.error('Error fetching GIF:', error);
    }
});

deleteAllBtn.addEventListener('click', () => {
    container.innerHTML = '';
});