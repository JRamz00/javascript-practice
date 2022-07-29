//Design and implement an application that reads an arbitrary number of integers that are in the range 0 t0 50
//inclusive and counts how many occurrences of each are entered. After all input has been processed, print all of
//the values (with the number of occurrences) that were entered one or more times.
//Extra credit: Modify the programs so that it works for numbers in the range between -25 and 25.

//step 1 make a function that takes in numbers
//step 2 make a loop that loops through each number and determines if it


const numbers = [-1,-1,1,2,22,-25]

var posNumbers = Array(25)
var negNumbers = Array(25)

for(var i = 0; i < numbers.length; i++){
    var numStorage = numbers[i]
    if(posNumbers[numStorage] == undefined){
        posNumbers[numStorage] = 1    
    } else{
        posNumbers[numStorage] += 1
    } 
}

for(var i = 0; i < numbers.length; i++){
    var numStorage = numbers[i]
    console.log(numStorage)
    if(negNumbers[-numStorage] == undefined){
        negNumbers[-numStorage] = 1    
    } else{
        negNumbers[-numStorage] += 1
    }    
}

for(var x = 0; x < posNumbers.length; x++){
    if(posNumbers[x] != undefined){
        console.log("The number of times ", x, "occurred is ",  posNumbers[x])
    }
}

for(var y = 0; y < negNumbers.length; y++){
    if(negNumbers[y] != undefined){
        console.log("The number of times ", -y, "occurred is ",  negNumbers[y])
    }
}

