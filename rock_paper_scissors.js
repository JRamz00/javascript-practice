//Design and implement an application that plays the Rock-Paper- Scissors game against the computer. 
//When played between two people, each person picks one of three options 
//(usually shown by a hand gesture) at the same time, and a winner is determined.
//In the game, Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. 
//The program should randomly choose one of the three options (without revealing it).. 
//at the same time the user will pass one of those 3 values into the function. 
//When the function is called the program reveals both choices and prints a statement indicating 
//if the user won, the computer won, or if it was a tie.

//rockPaperScissorsGame("rock") -> you picked 'rock', computer picked 'paper', you win!
//rockPaperScissorsGame("rock") -> you picked 'rock', computer picked 'scissors', you lose!
//rockPaperScissorsGame("rock") -> you picked 'rock', computer picked 'rock', it's a tie!
//rockPaperScissorsGame("oijief") -> must chose either 'rock', 'paper', or 'scissors'

//Step 1: Make a random generated function that will serve as the computer opponent, and in this function
//the computer will pick rock, paper or scissors. with the random generator
//Step 2: Make user variable, where I pass in rock paper or scissors
//Step 3: Make a function on rock, paper, scissor, and which one wins over the other.

rockPaperScissors("scissors")
//rockPaperScissors("scissors")
//rockPaperScissors("paper")
//this function is going to take in my input and decide who wins between me and the computer.
function rockPaperScissors(playersChoice){
    console.log("I chose " + playersChoice)
    var computerDecision = computerRockPaperScissors()
    console.log("Computer chose " + computerDecision)
    if(playersChoice == "rock" && computerDecision == "scissors"){
        console.log("The winner is player1")
    }
    else if(computerDecision == "rock" && playersChoice == "scissors"){
        console.log("The winner is Computer")
    }
    if(playersChoice == "scissors" && computerDecision == "paper"){
        console.log("The winner is player1")
    }
    else if(computerDecision == "scissors" && playersChoice == "paper"){
        console.log("The winner is Computer")
    }
    if(playersChoice == "paper" && computerDecision == "rock"){
        console.log("The winner is player1")
    }
    else if(computerDecision == "paper" && playersChoice == "rock"){
        console.log("The winner is Computer")
    }
    if(playersChoice == computerDecision){
        console.log("It's a Tie")
    } 
}

function computerRockPaperScissors(){
    var computerChoice = getRandomIntInclusive(0,2)
    if(computerChoice == 0){
        return "rock"
    }
    else if(computerChoice == 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}





