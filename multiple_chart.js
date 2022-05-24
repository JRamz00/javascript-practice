//Design and implement an application that produces a multiplication table, showing the 
//results of multiplying the integers 1 through 12 by themselves

//step 1: Make a fucntion called generateMultTable, that doesnt take in any value.
//step 2: Make the call function
//step 3: make a for loop that prints numbers that go right by
//add 1 char and a symbol?

function generateMultTable(){
    var maxNumber = 12
    var string = ""
    for (var i = 1; i <= maxNumber; i++) {
        for(var x = 1; x <= maxNumber; x++){
            string+=i*x 
            string+="\t"
        }
        string+="\n"
    }
    console.log(string)
}
generateMultTable()
