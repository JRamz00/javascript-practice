function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
    //The maximum is inclusive and the minimum is inclusive
  }




//var newPhoneNumber = generatePhoneNumber(num1, + "-" + num2, + "-" +  num3)
//var num1 
//Write an application that creates and prints a random phone number of the form XXX-XXX-XXXX. 
//Include the dashes in the output. 
//Do not let the first three digits contain an 8 or 9 (but don't be more restrictive than that),
//and make sure that the second set of three digits is not greater than 742.
//Hint: Think through the easiest way to construct the phone number. 
//Each digit does not have to be determined separately.

function generatePhoneNumber() {
   
   
    var num1 = String(getRandomIntInclusive(1,7)) + String(getRandomIntInclusive(1,7)) + String(getRandomIntInclusive(1,7)) 
   
    var num2 = getRandomIntInclusive(100,742)
   
    var num3 = getRandomIntInclusive(1, 9999);

    var newPhoneNumber = num1 + "-" + num2 + "-" + num3 

    console.log(newPhoneNumber)


    return newPhoneNumber
}
generatePhoneNumber()