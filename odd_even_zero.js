//Design and implement an application that determines and prints the number of odd, even, and zero digits
//in an integer value passed into the function.
//Step 1: Convert Integer into a string.
//Step 2: Loop through each individual char in the string.
//Step 3: Pass each individual character into a function to determine if it is odd, even or zero
//Step 4: Tally up how many odd, even or zeroes are in the integer

var numbers = 23049567
var numbers2 = 3448495950
var numbers3 = 5555
determineOddEvenZero(numbers)
determineOddEvenZero(numbers2)
determineOddEvenZero(numbers3)

function determineOddEvenZero(num){
        var numToString = num.toString()
        var odd = 0
        var even = 0
        var zero = 0
    for (var i = 0; i < numToString.length; i += 1) {
        console.log("character at index " + i + " is " + numToString.charAt(i))
        var result = oddsEvenZero(numToString.charAt(i))
        if(result == "even"){
            even++;
        }
        else if(result == "odd"){
            odd++;
        }
        else{
            zero++;
        }
    }
    console.log("This number has " + even + " even numbers.")
    console.log("This number has " + odd + " odd numbers.")
    console.log("This number has " + zero + " zero numbers.")
}

function oddsEvenZero(number){
    if(number == 0){
        return "zero"    
    }
    else if(number % 2 > 0){
        return "odd"
    }
    else{
        return "even"
    }
}



 