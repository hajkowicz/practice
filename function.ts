var matchesAnyLetter = function(letter: string, mystring: string): boolean {
  for (var z = 0; z < mystring.length; z++) {
    var currentPosition = mystring[z];
    if (letter === currentPosition) {
      return true;
    }
  }
  return false;
};

var isVowel = function(letter: string): boolean {
  if ("aAiouEuIoeOiUa".indexOf(letter) !== -1) {
    return true;
  } else {
    return false;
  }
};

var makePigLatinWord = function(word: string): string {
  var finalResult = "";
  var cubbyOne = "";
  var cubbyTwo = "";
  var ending = "ay";
  var cubbyFour = "";

  if (word[0] === word[0].toUpperCase()) {
    var wasCapitalized = true;
  } else {
    wasCapitalized = false;
  }
  for (var y = 0; y < word.length; y++) {
    var currentLetter = word[y];
    var previousLetter = word[y - 1];

    if (currentLetter === "'") {
      cubbyFour = currentLetter;
    } else if (previousLetter === "'") {
      cubbyFour = cubbyFour + currentLetter;
    } else if (cubbyTwo !== "") {
      finalResult = finalResult + currentLetter;
    } else if (isVowel(currentLetter)) {
      cubbyTwo = cubbyTwo + currentLetter;
    } else {
      cubbyOne = cubbyOne + currentLetter;
    }
  }

  if (cubbyOne === "") {
    ending = "y" + ending;
  }

  var pigLatinWord = cubbyTwo + finalResult + cubbyOne + ending + cubbyFour;

  if (wasCapitalized === true) {
    pigLatinWord = pigLatinWord.toLowerCase();

    pigLatinWord =
      pigLatinWord[0].toUpperCase() +
      pigLatinWord.substring(1, pigLatinWord.length);
  }
  return pigLatinWord;
};

var makePigLatinSentence = function(sentence: string): string {
  var currentWord = "";
  var finalSentence = "";
  var cubbyThree = "";

  for (var z = 0; z < sentence.length; z++) {
    var currentPosition = sentence[z];

    if (
      currentPosition === "," ||
      currentPosition === "." ||
      currentPosition === ";"
    ) {
      cubbyThree = currentPosition;
    } else if (currentPosition !== " ") {
      currentWord = currentWord + currentPosition;
    }

    if (currentPosition === " " || z === sentence.length - 1) {
      var pigLatinWord = makePigLatinWord(currentWord);
      finalSentence = finalSentence + pigLatinWord + cubbyThree + " ";
      cubbyThree = "";
      currentWord = "";
    }
  }
  return finalSentence;
};

var name1 = "pneumonoultramicroscopicsilicovolcanoconiosis.";
var result = makePigLatinSentence(name1);

console.log(result);
