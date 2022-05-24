//Create a function that takes a string and then determines and prints how many of each lowercase vowel 
//(a, e, i, o, and u) appear in the entire string. Have a separate counter 
//for each vowel. Also count and print the number of nonvowel characters

//1. create a function that takes a string
//2. determine how the function prints how many lowercase vowels are in an entire string
//3. 

vowels("The Amazing New York Giants")
function vowels(word){
    var vowelCounter = 0
    var nonVowelCounter = 0
    for (var letter = 0; letter <= word.length; letter++) {
        var currentLetter = word.slice(letter,letter+1)
        console.log(currentLetter)
        if(currentLetter == "a" || currentLetter == "e" || currentLetter == "i" || currentLetter == "o" || currentLetter == "u"){
            vowelCounter++
            }
        else{
            nonVowelCounter++
            }
        }
        console.log(vowelCounter)
        console.log(nonVowelCounter)     
        
    }   
   

