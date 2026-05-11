const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
  "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..",
  "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
}`;

// 1. Convert JSON to Object
function toJs() {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
            reject("Error: Morse object is empty.");
        } else {
            resolve(morseJS);
        }
    });
}

// 2. Translate user input to Morse
function toMorse(morseJS) {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();
    return new Promise((resolve, reject) => {
        const result = [];
        for (const char of userInput) {
            if (char === " ") continue; // Skip spaces for simplicity
            if (!(char in morseJS)) {
                reject(`Error: Character "${char}" does not exist in Morse.`);
                return;
            }
            result.push(morseJS[char]);
        }
        resolve(result);
    });
}

// 3. Join and display on DOM
function joinWords(morseTranslation) {
    const container = document.body; // You can specify a specific div if needed
    const p = document.createElement("p");
    p.style.fontSize = "20px";
    p.innerHTML = morseTranslation.join("<br>");
    container.appendChild(p);
}

// --- Chain the Functions ---
toJs()
    .then(obj => toMorse(obj))
    .then(translation => joinWords(translation))
    .catch(err => console.error(err));