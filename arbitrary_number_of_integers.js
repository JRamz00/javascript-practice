//Design and implement an application that reads an arbitrary number of integers that are in the range 0 t0 50
//inclusive and counts how many occurrences of each are entered. After all input has been processed, print all of
//the values (with the number of occurrences) that were entered one or more times.
//Extra credit: Modify the programs so that it works for numbers in the range between -25 and 25.

//step 1 make a function that takes in numbers
//step 2 make a loop that loops through each number and determines if it


const numbers = [1,1,1,1,1,23,23,44,33,22,24,31,30,33,20,11,13,7,8,9,10,13,49,48,44,37]
var count = Array(50)
for(var i = 0; i < numbers.length; i++){
    var numStorage = numbers[i]
    if(count[numStorage] == undefined){
        count[numStorage] = 1    
    } else{
        count[numStorage] += 1
    }
    
}
for(var x = 0; x < count.length; x++){
    if(count[x] != undefined){
        console.log("The number of times ", x, "occurred is ",  count[x]) 
    }
    
}

    
    
    

        
      

