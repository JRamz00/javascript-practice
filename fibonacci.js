//Create a function where you can call it by writing the code: fibonacciGenerator (n) Where n is the number 
//of items in the sequence. So I should be able to call: fibonacciGenerator(3) and get [0,1,1] as the output.
//IMPORTANT: The solution checker is expecting an array as the correct output.

//Step 1. fibo gen takes in a num like 5
//example const fibonacciNums = [0,1,1,2,3,5]



fibonacciGenerator(100)

function fibonacciGenerator(num){
    const fibonacciNums = [0,1]
    for (var i = 0; i < num-2;  i++) {
        var result = fibonacciNums[i] + fibonacciNums[i+1]
        fibonacciNums.push(result)
    }
    console.log(fibonacciNums)
}
