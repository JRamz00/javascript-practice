//Create a function that takes an integer value and prints the sum of all even integers between 2 and the input 
//value, inclusive
//Step 1: Make the function, that takes a number and make conditions for that function.
//Step 2: Make the function call, with the number as the arguement.
//Step 3: Find a way to print the numbers between 2 and the integer, while making sure it only prints even numbers.
//Step 4: Console log with a string that says "The sum of all the even integers between 2 and x is y.

sumOfEvenInteger(20)
sumOfEvenInteger(100)

function sumOfEvenInteger(input){
    var sum = 0
    for(var evenInt = 2; evenInt <= input; evenInt+=2) {
        sum = sum + evenInt
        console.log("sum so far: ", sum, "current number: ", evenInt)
    }
    console.log(sum)
        
}
