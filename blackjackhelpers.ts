type Card = { suit: string; name: string; value: number };

export var shuffle = function(a: Array<Card>): Array<Card> {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

var getNameFromValue = function(num: number): string {
  //input 1 , output "Ace" , input 2, output "two", etc ...
  if (num >= 2 && num <= 10) {
    return String(num);
  } else if (num === 1) {
    return "Ace";
  } else if (num === 11) {
    return "Jack";
  } else if (num === 12) {
    return "Queen";
  } else {
    return "King";
  }
};

var getSuit = function(num: number): string {
  var suitDescriptor = ["spades", "clubs", "hearts", "diamonds"];
  return suitDescriptor[num];
};

export var getDeck = function(): Array<Card> {
  var deck = [];

  for (var y = 0; y < 4; y++) {
    for (var x = 0; x < 13; x++) {
      var cardOfSpades = {
        suit: getSuit(y),
        name: getNameFromValue(x + 1),
        value: x + 1
      };
      deck.push(cardOfSpades);
    }
  }
  return deck;
};

export var drawCard = function(currentDeck: Array<Card>): Card {
  var currentCard = currentDeck.pop();
  if (currentCard === undefined) {
    throw new Error("Deck is Empty.");
  }
  return currentCard;
};

export var getSum = function(cards: Array<Card>): number {
  var sum = 0;

  for (var i = 0; i < cards.length; i++) {
    if (cards[i].name === "Jack" || cards[i].name === "Queen" || cards[i].name === "King"){
      cards[i].value = 10;
    } else if (cards[i].name === "Ace" && sum < 11){
      cards[i].value = 11;
    } else if (cards[i].name === "Ace"){
      cards[i].value = 1;
    }
    sum = sum + cards[i].value;
  }
  return sum;
};
