//create a function that will take a number as 
//an integer and that number will be the person's age.
//and then determine if the person is legally allowed to drink. 
//If they are then console you can drink, if not say you cant drink.


drinkingAge(23)
drinkingAge(21)
drinkingAge(18)
    
function drinkingAge(age) {
if(age >= 21) {
    console.log("You can drink hooray") 
}
else if(age <= 21) {
    console.log("You cant drink, get outta here!")

}
}