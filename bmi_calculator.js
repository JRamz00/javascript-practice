var bmi = bmiCalculator(99.8,1.88)
var bmi2 = bmiCalculator(85,1.69)
var bmi3 = bmiCalculator(60,1.60)
//bmi = weight/height^2
function bmiCalculator(weight,height) {
    console.log("weight is " + weight)
    console.log("height is " + height)
    var yourBmi = weight/(height*height)
    if(yourBmi < 18.5) {
        console.log("You are mad skinny bro")    
    }
    
    else if(yourBmi > 25) {
        console.log("You need the gym ASAP!")
    }
    
    else { 
        console.log("You are fine!")
    }
    
    
    return yourBmi
    
}
console.log("firstBmiValue is " + bmi)
console.log("secondBmiValue is " + bmi2)
console.log("thirdBmiValue is " + bmi3)


function main() {
    var addReturn = add(10,12,11)
    var x = add(5,6,7)
    var y = add(20,40,60)
    console.log(addReturn)
}

function add(num1,num2,num3) {
    console.log(num1)
    console.log(num2)
    return num1+num2-num3     
}
 
//Any variable that is declared inside of a function only exist within that function
//Any variable created outside of a function will never exist inside of a function
