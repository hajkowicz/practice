"use strict";
var string = "This is Tyler's Sentence.";
var currentWord = "";
var finalSentence = "";
var cubbyThree = "";
for (var z = 0; z < string.length; z++) {
    var currentPosition = string[z];
    if (currentPosition === "," || currentPosition === "." || currentPosition === ";") {
        cubbyThree = currentPosition;
    }
    else if (currentPosition !== " ") {
        currentWord = currentWord + currentPosition;
    }
    if (currentPosition === " " || z === (string.length - 1)) {
        var x = currentWord;
        var finalResult = "";
        var cubbyOne = "";
        var cubbyTwo = "";
        var ending = "ay";
        var pigLatinWord = "";
        for (var y = 0; y < x.length; y++) {
            var currentLetter = x[y];
            if (cubbyTwo !== "") {
                finalResult = finalResult + currentLetter;
            }
            else if (currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u" || currentLetter === "A" || currentLetter === "E" || currentLetter === "I" || currentLetter === "O" || currentLetter === "U") {
                cubbyTwo = cubbyTwo + currentLetter;
            }
            else {
                cubbyOne = cubbyOne + currentLetter;
            }
        }
        if (cubbyOne === "") {
            ending = "y" + ending;
        }
        pigLatinWord = cubbyTwo + finalResult + cubbyOne + ending;
        finalSentence = finalSentence + pigLatinWord + cubbyThree + " ";
        cubbyThree = "";
        currentWord = "";
    }
}
console.log(finalSentence);
