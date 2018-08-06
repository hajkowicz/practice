"use strict";
var readline_sync = require("readline-sync");
//var userName = readline_sync.question("What is your REAL name? ");
//console.log("Hello " + userName + "!");
var deck = require("./blackjackhelpers.js");
console.log("GAME BEGIN");
// 1. Show them their 2 cards and dealer 1 card
var playerCards = [deck.getCard(), deck.getCard()];
var dealerCards = [deck.getCard(), deck.getCard()];
console.log("You drew " + playerCards[0] + " and " + playerCards[1] + ". Your total is " + deck.getSum(playerCards) + ".");
console.log("Dealer shows " + dealerCards[0]);
// 2. Ask if they want to hit / stay
while (deck.getSum(playerCards) < 21) {
    var introQuestion = readline_sync.question("Would you like to stay or hit?");
    // 3a. if hit, show them another card 
    // 3b. if stay, dealer shows 2nd card 
    if (introQuestion === "hit") {
        playerCards.push(deck.getCard());
        var playerSum = deck.getSum(playerCards);
        console.log("You drew a " + playerCards[playerCards.length - 1] + ". Your total is " + playerSum + ".");
    }
    else if (introQuestion === "stay") {
        break;
    }
    else {
        console.log("YOU ARE A FUKIN MORON.");
    }
}
//Dealer's Turn 
var dealerSum = deck.getSum(dealerCards);
var playerSum = deck.getSum(playerCards);
console.log("The Dealer flipped over a " + dealerCards[1] + ".");
while (deck.getSum(dealerCards) < 17 && playerSum < 21) {
    var currentCard = deck.getCard();
    dealerCards.push(currentCard);
    console.log("The Dealer drew a " + currentCard + ".");
    dealerSum = deck.getSum(dealerCards);
}
if (playerSum > 21) {
    console.log("You Lose :(");
}
else if (dealerSum > playerSum && dealerSum < 21) {
    console.log("The dealer's total is " + dealerSum + ". You Lose Big Boy!");
}
else if (playerSum === 21 && dealerSum !== 21) {
    console.log("The dealer's total is " + dealerSum + ". You Win Big Banana!");
}
else if (playerSum === dealerSum) {
    console.log("The dealer's total is " + dealerSum + ". PUSH");
}
else if (dealerSum > playerSum && dealerSum <= 21) {
    console.log(". The dealer's total is " + dealerSum + ". You Lose Bitch.");
}
else if (dealerSum > playerSum && dealerSum > 21) {
    console.log(". The dealer's total is " + dealerSum + ". You win.");
}
else {
    console.log("The dealer's total is " + dealerSum + ". YOU WIN!");
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
