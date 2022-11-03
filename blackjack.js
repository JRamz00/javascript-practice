//Create a blackjack game
//First create a deck of cards
// var suits = ["spades", "diamonds", "clubs", "hearts"]; var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; create a deck via variable
//The deck variable is going to be 1 array with 52 card objects. ex: var deck = [{Value: 'A', Suit: 'Spades'}, {Value: 'A', Suit: 'Diamonds'}, {Value: 'A', Suit: 'Clubs'}...]
//you will have to shuffle the deck, return a shuffled deck
//1. You will have 1 function to make the deck, a deck array with 52 card objects
//2. create a function to shuffle the cards, the deck when i print it, should be in a shuffled ordered and console.logged
//3. last function is going to deal a card, take the first card/element of the array at the top. Call it deal
//hint get an object into an array. create 1 object first

makeDeck()

function makeDeck(){
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    var suits = ["spades", "diamonds", "clubs", "hearts"]
    var card = {
        Value: values[" "],
        Suit: suits[" "]
    }
    console.log(card)  
    for(var i = 0; i < suits.length; i++ ){
        for(var j = 0; j <= values.length; j++){
            console.log(i, j)
            console.log(card)

    }
}
}


  


