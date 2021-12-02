var i = 0
var text = ""

while (i < 5) {
    text = "The number is " + i;
    console.log(text)
    i++;
  }


 
  

function multiplication(x,y) {
    //for this example x = 2 and y = 5
    var sum = 0
    var i = 0
    while(i < y){
        sum += x
        i++
        
    }
    console.log(x + "times " + y + "=" + sum)
}

multiplication(5,2)
multiplication(3,4)
multiplication(102,10)
multiplication(2,55)



//create a condition where it will loop y number of times. (whatever value is in y)