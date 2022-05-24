//write a function that takes a string and prints one character per line.
//step 1: Make the function that takes a string
//step 2: Maske a for loop that takes ea


stringInput("Hello")
stringInput("Airplane")

function stringInput(word){
     for (var index = 0; index < word.length; index++) {
        console.log(word.slice(index,index+1))
    }
    
}