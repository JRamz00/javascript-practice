function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

var firstName = "Crystal"
var lastName = "Ramirez" 

var firstName2 = "Jesse"
var lastName2 = "Rahman"   
                                           
var username = generateUsername(firstName, lastName)
var username2 = generateUsername("Jesse", "Rahman")

console.log(username)
console.log(username2)
//Write a program that prompts for and reads the user’s first and last name, separately.
// The print a string composed of the first letter of the user’s first name , 
//followed by the first five characters of the user’s last name, 
//followed by a random number in the range 10 to 99. 
//Assume that the last name is at least five characters long

function generateUsername(f_name, l_name) {
    
    var numberStorage = getRandomInt(10, 99)
    console.log(numberStorage)
    return f_name.slice(0,1) + l_name.slice(0,5) + numberStorage
    
}
