//create a function called coinFlip that will return either heads or tail at random.


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
console.log(coinFlip())
console.log(coinFlip())
console.log(coinFlip())
console.log(coinFlip())