let sentence = "The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    let partToReplace = sentence.slice(wordNot, wordBad + 3);
    console.log(sentence.replace(partToReplace, "good"));
} else {
    console.log(sentence);
}