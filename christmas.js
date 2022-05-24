// Design and implement an application that prints the verses of the song "The Twelve Days of Christmas," 
//in which each verse adds one line. The first two verses of the song are:

// On the 1st day of Christmas my true love gave to me A partridge in a pear tree.
// On the 2nd day of Christmas my true love gave to me Two turtle doves, and
// A partridge in a pear tree.

// Use a switch statement in a loop to control which lines get printed. Hint: Order the cases carefully 
//and avoid the break statement. Use a separate switch statement to put the appropri- ate suffix on the 
//day number (1st, 2nd, 3rd, etc.). The final verse of the song involves all 12 days, as follows:

// On the 12th day of Christmas, my true love gave to me Twelve drummers drumming,
// Eleven pipers piping,
// Ten lords a-leaping,
// Nine ladies dancing, Eight maids a-milking, Seven swans a-swimming, Six geese a-laying,
// Five golden rings,
// Four calling birds,
// Three French hens,
// Two turtle doves, and
// A partridge in a pear tree.

//step 1: make a function with a forloop inside
christmasSong()
function christmasSong(){
    var verse = 12
    var startVerse = "On the "
    var restOfVerse = " day of Christmas my true love gave to me"
      for (var j = 1; j <= verse; j++) {
        console.log("Iteration" + j)
        switch(j){
            case 1:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 2:
                console.log(startVerse + j+"nd" + restOfVerse)
                break;
            case 3:
                console.log(startVerse + j+"rd" + restOfVerse)
                break;
            case 4:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 5:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 6:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 7:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 8:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 9:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 10:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 11:
                console.log(startVerse + j+"th" + restOfVerse)
                break;
            case 12:
                console.log(startVerse + j+"th" + restOfVerse)
                break;        

        }
        switch (j){
            case 12:
                console.log("Twelve drummers drumming,")
                
            case 11:
                console.log("Eleven pipers piping,")
                
            case 10:
                console.log("Ten lords a-leaping,")
                

            case 9:
                console.log("Nine ladies dancing,")
                  
                
            case 8: 
                console.log("Eight maids a-milking,")
                  
            
            case 7:
                console.log("Seven swans a-swimming,")
                
                
            case 6:
                console.log("Six geese a-laying,")
                 
                
            case 5:
                console.log("Five golden rings,")
                
                
            case 4:
                console.log("Four calling birds,")
                
        
            case 3:
                console.log("Three French hens,")
                
            
            case 2:
                console.log("Two turtle doves, and ")
                

            case 1:
                console.log("A partridge in a pear tree.")
                       
        }
        console.log("")
    }
}
 //beer bottles is a great clue, put the iteration of the suffix into the string and make cases for them in a 
 //new switch

