export var getCard = function(): number{
	return getRandomInt(1, 12);
}

var getRandomInt = function(min: number, max: number): number{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export var getSum = function(cards: Array<number>): number{
	var sum = 0

	for (var i = 0; i < cards.length; i++){
		sum = sum + cards[i]
	}


	return sum
}
