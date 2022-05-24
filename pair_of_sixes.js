// Create an application that rolls a pair of dice 100 times and counts the number of times 2 sixes occur. 
// Hint: you can create a function that 'rolls a dice' and returns the number that rolled

//step1: Make the hint function lol
//step2: the rollDice function doesnt take anything in but returns me a value between 1-6
//step3: Get a random Generator and call it from within the function rollDice
//step4: 

function rollDice(){
    var maxRolls = 100
    var pairOfSixes = 0
    for (var i = 1; i <= maxRolls ; i++) {
        var firstDie = rollDie()
        var secondDie = rollDie()
        console.log(firstDie, secondDie)
        if(firstDie == 6 && secondDie == 6){
            pairOfSixes++
            console.log("Two Sixes!")
            
        }
    }  
    console.log("Total Pair of Sixes = ", pairOfSixes)
}

rollDice()


function rollDie(){
    return getRandomIntInclusive(1,6)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
    //The maximum is inclusive and the minimum is inclusive
}
