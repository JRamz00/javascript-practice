//Design and implement an application that simulates a simple slot machine, in which 3 numbers
//between 0 and 9 are randomly selected and printed side by side. Print an appropriate statement
//in all 3 of the numbers are the same, or if any 2 of the numbers are the same. Continue playing
//until thr user chooses to stop.

//basically what you need to do is create a function called spinSlotMachine . 
//When you call it it should return 3 random numbers between 0 and 9 side by side. 
//And return messages based on how many numbers match: 3 matching numbers, 2 matching numbers, 
//no matching numbers.

//Step 1: make the spinSlotMachine function that passes no value, being that we just need to call it,
//so that it spins. I will console log the call too.
//Step 2: get a random number generator to return the random numbers between 0-9, three times. then take the value,
//and console log it.
//step 3: Make a conditional that will tell me if there is 3 matching numbers, 2 or none.


function spinSlotMAchine(){
    var num1 = String(getRandomIntInclusive(0,9))
    var num2 = String(getRandomIntInclusive(0,9))
    var num3 = String(getRandomIntInclusive(0,9))
    console.log(num1 + num2 + num3)
    if(num1 === num2 && num1 === num3){
        console.log("There are three matching numbers")
    }
    else if((num1 === num2) || (num1 === num3) || (num2 === num3)){
        console.log("there are two matching numbers")
    }
    else{
        console.log("there are no matching numbers fam")
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
    //The maximum is inclusive and the minimum is inclusive
}

spinSlotMAchine()
spinSlotMAchine()
spinSlotMAchine()
spinSlotMAchine()
spinSlotMAchine()
spinSlotMAchine()
spinSlotMAchine()
spinSlotMAchine()
spinSlotMAchine()
spinSlotMAchine()
