var readline_sync = require("readline-sync");
//var userName = readline_sync.question("What is your REAL name? ");
//console.log("Hello " + userName + "!");

import deck = require("./blackjackhelpers");

var game = function(): void{
	

	console.log("GAME BEGIN")






	//Create & Shuffle Deck 
	var currentDeck = deck.shuffle(deck.getDeck());






	// 1. Show them their 2 cards and dealer 1 card


	var playerCards = [deck.drawCard(currentDeck), deck.drawCard(currentDeck)] 
	var dealerCards = [deck.drawCard(currentDeck), deck.drawCard(currentDeck)] 
	console.log("You drew a " + playerCards[0].name + " of " + playerCards[0].suit + " and a " + playerCards[1].name + " of " + playerCards[1].suit + ". Your total is " + deck.getSum(playerCards) + ".");
	console.log("Dealer shows " + dealerCards[0]);


	// 2. Ask if they want to hit / stay


	while (deck.getSum(playerCards) < 21){
		


		var introQuestion = readline_sync.question("Would you like to stay or hit?");

			// 3a. if hit, show them another card 
			// 3b. if stay, dealer shows 2nd card 

		if (introQuestion === "hit"){
			playerCards.push(deck.drawCard(currentDeck))
			var playerSum = deck.getSum(playerCards)
			console.log("You drew a " + playerCards[playerCards.length-1] + ". Your total is " + playerSum + ".")
		} else if (introQuestion === "stay"){
			break;
		} else {
			console.log("YOU ARE A FUKIN MORON.")
		}
	}






	//Dealer's Turn 


	var dealerSum = deck.getSum(dealerCards)
	var playerSum = deck.getSum(playerCards)

	console.log("The Dealer flipped over a " + dealerCards[1] + ".")



	while (deck.getSum(dealerCards) < 17 && playerSum < 21){
		var currentCard = deck.drawCard(currentDeck)
		dealerCards.push(currentCard)
		console.log("The Dealer drew a " + currentCard + ".")
		dealerSum = deck.getSum(dealerCards)	
	}


	if (playerSum > 21){
		console.log("You Lose :(")
	} else if (dealerSum > playerSum && dealerSum < 21){
		console.log("The dealer's total is " + dealerSum + ". You Lose Big Boy!")
	} else if (playerSum === 21 && dealerSum !== 21){
		console.log("The dealer's total is " + dealerSum + ". You Win Big Banana!")
	} else if (playerSum === dealerSum){
		console.log("The dealer's total is " + dealerSum + ". PUSH")
	} else if (dealerSum > playerSum && dealerSum <= 21) {
		console.log(". The dealer's total is " + dealerSum + ". You Lose Bitch.")
	} else if (dealerSum > playerSum && dealerSum > 21) {
		console.log(". The dealer's total is " + dealerSum + ". You win.")
	} else {
		console.log("The dealer's total is " + dealerSum + ". YOU WIN!")
	}
		

		// 4a. Check if player busted 
		// 4b. Check if dealer busted  
		// 4c. Check if player got blackjack 
		// 4d. Check if dealer got blackjack
		// 4e. Check if tied 
		// 4f. Check if player sum > dealer sum 
		// 5. Print win/lose 

		//max 4 unique numbers 
		//deal with Aces 
}

	


game();

//console.log(deck.getDeck()); 


	//max 4 unique numbers
	//deal with Aces
