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
    var secondCard = dealCard(deck)
    console.log("Second card ", secondCard.Card)
    console.log("Deck after 2nd ", secondCard.Deck)
    return [firstCard.Card, secondCard.Card]
}
// Rename function to getHand, function will take in a shuffled deck, and then return a hand, 
// which is 2 cards and the updated deck
function getHands(deck){
    var myHand = getHand(deck)
    console.log("My Cards are ", myHand)
    console.log("Remaining in the deck ", deck)
    var computerHand = getHand(deck)
    console.log("Computer's cards are ", computerHand)
    return [myHand, computerHand, deck]
}

function sumOfHands(deck){
    var player1 = deck[0]
    console.log("****************************")
    console.log("Deck Object ", deck)
    console.log("****************************")
    console.log("Player 1 has ",player1)
    var cpu = deck[1]
    console.log("computer has ",cpu)
    var mySum = cardSum(player1[0].Value)
    var mySum2 = cardSum(player1[1].Value)
    var dealer = cardSum(cpu[0].Value)
    var dealer2 = cardSum(cpu[1].Value)
    
    var player1CardSum = mySum + mySum2
    var dealerSum = dealer + dealer2
    console.log("You have a total of " ,player1CardSum)
    console.log("Dealer has a total of " ,dealerSum)
    return [player1CardSum, dealerSum, deck[2]]
    // if(dealerSum < "16"){
    //     dealCard(deck[2])
    // }
    // else if(dealerSum > 17){
    //     return dealerSum
    // }
    // console.log(dealerSum)
    // console.log("TESTING",player1[0].Value)
    // var player1CardSum = +player1[0].Value + +player1[1].Value
    // console.log("***TEST***", player1CardSum)
    
}
//change to cardValue
function cardSum(value){
//Clean this up  
    console.log("This card's value is ",value)
    // if(value === "J"){
    //     return 10
    // }
    // else if(value === "Q"){
    //     return 10
    // }
    // else if(value === "K"){
    //     return 10
    // }
    if(value === "J"||value === "Q"||value === "K"){
        return 10
    }
    else if(value === "A"){
        return 1
    }
    else{
        return parseInt(value)
    }
}
//this function passes the values from sumCards which is the player sum, dealer sum and the deck. 
//Need to figure out how to deal the card and also shave down the deck.
function blackJack(hands){
    console.log("BLACKJACK", hands)
    if(hands[1] < "16"){
        return dealCard(hands[2])
    }
}
    
//fix function names like blackJack and cardSum
// we need to fix the function so that it can keep replenishing the dealers hand until the deal meets 16 cards    

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

var hands = getHands(shuffledDeck)
console.log(hands)

var sumCards = sumOfHands(hands)
console.log("You have", sumCards[0], "Dealer has", sumCards[1])

var gameTime = blackJack(sumCards)
console.log("After BLACKJACK", gameTime)

 

//var hands = getHands(shuffledDeck)
 //console.log("Hands ", hands)


// var dealtCardAndDeck = dealCard(hands)
// console.log("dealt card ", dealtCardAndDeck.Card)
// console.log("Deck after the card has been dealt ", dealtCardAndDeck.Deck)
