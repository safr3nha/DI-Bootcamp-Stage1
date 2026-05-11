const colors = ["azul", "preto", "verde", "branco", "cinza"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    let suffix = (i < 3) ? suffixes[i] : suffixes[4];
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}