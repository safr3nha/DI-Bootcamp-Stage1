const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

const stories = [
    (n, a, p, v, l) => `Today, ${p} went to ${l} to ${v} a ${a} ${n}. It was legendary!`,
    (n, a, p, v, l) => `In the middle of ${l}, ${p} realized that a ${a} ${n} was starting to ${v}.`,
    (n, a, p, v, l) => `${p} loves to ${v} with a ${a} ${n} whenever they visit ${l}.`
];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        console.error("Please fill in all fields.");
        return;
    }

    storySpan.textContent = stories[0](noun, adjective, person, verb, place);
});

const shuffleBtn = document.createElement("button");
shuffleBtn.textContent = "Shuffle Story";
document.body.appendChild(shuffleBtn);

shuffleBtn.addEventListener("click", () => {
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        return;
    }

    const randomIndex = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[randomIndex](noun, adjective, person, verb, place);
});