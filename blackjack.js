//Create a blackjack game
//First create a deck of cards
// var suits = ["spades", "diamonds", "clubs", "hearts"]; var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; create a deck via variable
//The deck variable is going to be 1 array with 52 card objects. ex: var deck = [{Value: 'A', Suit: 'Spades'}, {Value: 'A', Suit: 'Diamonds'}, {Value: 'A', Suit: 'Clubs'}...]
//you will have to shuffle the deck, return a shuffled deck
//1. You will have 1 function to make the deck, a deck array with 52 card objects
//2. create a function to shuffle the cards, the deck when i print it, should be in a shuffled ordered and console.logged
//3. last function is going to deal a card, take the first card/element of the array at the top. Call it deal
//hint get an object into an array. create 1 object first

//1.
//makeDeck()

function makeDeck(){
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    var suits = ["spades", "diamonds", "clubs", "hearts"]
    const cardArray = []  
    for(var i = 0; i < suits.length; i++){
        for(var j = 0; j < values.length; j++){
            var card = {
                Value: values[j],
                Suit: suits[i]
            }
            cardArray.push(card)
        }     
    }    
    return cardArray
}  

function shuffleDeck(deck){
    for(var i = 0; i < deck.length; i++){
        var storage = deck[i]
        var randomIndex = getRandomInt(deck.length-1)
        deck[i] = deck[randomIndex]
        deck[randomIndex] = storage
    }
    return deck
}
function getHand(deck){
    var firstCard = dealCard(deck)
    console.log("First card ", firstCard.Card)
    console.log("Deck after ", firstCard.Deck)
    console.log("TEST ", deck)
    var secondCard = dealCard(deck)
    console.log("Second card ", secondCard.Card)
    console.log("Deck after 2nd ", secondCard.Deck)
}
// Rename function to getHand, function will take in a shuffled deck, and then return a hand, 
// which is 2 cards and the updated deck
function getHands(deck){
    const myCards = []
    const dealerCards = []
    for(var i = 0; i < 2; i++){
        var myCard = dealCard(deck)
        console.log("My card ", myCard)
        var dealerCard = dealCard(deck)
        console.log("Dealer hand ", dealerCard)
        myCards.push(myCard)
        console.log("Array ", myCards)
        dealerCards.push(dealerCard)
    }
    console.log("deck after ", deck)
    return [myCards, dealerCards, deck]
}

function dealCard(deck1){
    var card = deck1.shift()
    var results = {
        Card: card,
        Deck: deck1
    }
    return results
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// FUNCTION CALLS!!
var deckOfCards = makeDeck()
console.log(deckOfCards)

var shuffledDeck = shuffleDeck(deckOfCards)
console.log(shuffledDeck)

var hand = getHand(shuffledDeck)
//var hands = getHands(shuffledDeck)
 //console.log("Hands ", hands)


// var dealtCardAndDeck = dealCard(hands)
// console.log("dealt card ", dealtCardAndDeck.Card)
// console.log("Deck after the card has been dealt ", dealtCardAndDeck.Deck)
