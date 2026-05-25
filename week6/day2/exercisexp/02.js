const url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
    .then(response => {
        if (response.status !== 200) {
            throw new Error("Error fetching data");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));