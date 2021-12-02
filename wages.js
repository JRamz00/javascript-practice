//create a function that calculates the amount of money a person will make in a given week.
//Set the hourly salary and you have to calculate any amount of hours over 40, it will go to OT.
//Base salary is 20 an hour, and at OT it will be 30.


calculateWage(37.50)
calculateWage(50)


function calculateWage(hours) {
var salary = 16.50
var ot = 24.75
if(hours <= 40) {
    return salary * hours 
}
else {
    return salary * 40 + (hours - 40) * ot
} 
//hours*salary=wage
//40*20=800 30*5=150 =950

}

//console.log(wage1)
//console.log(wage2)
console.log(calculateWage(35))
console.log(calculateWage(45))
