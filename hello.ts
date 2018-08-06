/*
var words = "poppysauce";
var sum = 0;

for (var i = 0; i < words.length; i++){
	if (words[i] === "a" || words[i] === "e" || words[i] === "i" || words[i] === "o" || words[i] === "u"){
		sum = sum+1;
	}
}
console.log("there are this many vowels");
console.log(sum);
*/



/*Translate a word to pig latin 7.23.2018, then a string if you are LORD RULER, which you are. Pig Latin - Pig Latin is a game of alterations played on the English language game. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Read Wikipedia for more information on rules.
*/




var x = "tyler";
var finalResult = "";
var cubbyOne = "";
var cubbyTwo = "";
var ending = "ay";

for (var y = 0; y < x.length; y++){
	var currentLetter = (x[y]);

	if (cubbyTwo !== ""){
		finalResult = finalResult + currentLetter;
	} else if (currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u"){
		cubbyTwo = cubbyTwo + currentLetter; 
	} else {
		cubbyOne = cubbyOne + currentLetter; 
	}
}

if (cubbyOne === ""){
	ending = "y" + ending;
}
console.log(cubbyTwo + finalResult + cubbyOne + ending)

