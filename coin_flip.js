//create a function called coinFlip that will return either heads or tail at random.
//Modify the coinflip program so that it flips 10 times and then records the winner.
//Example:
//coinFlipGame() -> heads: 6 tails: 4 , Heads wins
//coinFlipGame() -> heads: 2 tails: 8 , Tails wins
//coinFlipGame() -> heads: 5 tails: 5 , It's a tie

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function coinFlip(){
    var headsOrTails = getRandomInt(2)
    if(headsOrTails === 1){
       return "heads"
    }
    else{
       return "tails"
    }
}

console.log(coinFlip())
//console.log(coinFlip())
//console.log(coinFlip())
//console.log(coinFlip())
//console.log(coinFlip())