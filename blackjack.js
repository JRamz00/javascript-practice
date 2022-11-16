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

// function getHands(deck){
//     const myCards = []
//     const dealerCards = []
//     for(var i = 0; i < 2; i++){
//         var myCard = deck.shift()
//         var dealerCard = deck.shift()
//         myCards.push(myCard)
//         dealerCards.push(dealerCard)
//     }
//     return [myCards, dealerCards]
// }
// 
function dealCard(deck){
    var card = deck.shift()
    var results = {
        Card: card,
        Deck: deck
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

// var hands = getHands(shuffledDeck)
// console.log("Hands ", hands)

var dealtCardAndDeck = dealCard(shuffledDeck)
console.log("dealt card ", dealtCardAndDeck.Card)
console.log("Deck after the card has been dealt ", dealtCardAndDeck.Deck)
