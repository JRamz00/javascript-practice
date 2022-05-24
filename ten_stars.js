//step1 make variables for how many lines it will go down, and a variable for the string.
//step2 make a loop for the the lines, and another within the loop for the *s
//step3 after the loop within the loop becomes false, put a break in the line.
//step4 console log string
//First loop is the rows second loop is the amount of stars. only in First example

//First
var maxRows = 10
var string = ""
for (var rows = 1; rows <= maxRows; rows++) {
  for (var stars = 0; stars < rows; stars++) {
    string += "*"
  }
  string += "\n"
}
console.log(string)

//A.
var minRows = 0
var string1 = ""
for (var rows = 10; rows >= minRows; rows--) {
  for (var stars = 0; stars < rows; stars++) {
    string1 += "*"
  }
  string1 += "\n"
}
console.log(string1)

//B.
//step1 make a loop for rows
//step2 make a loop for spaces
//step3 make a loop for stars

 var minRows = 0
 var string2 = ""
 for(var rows = 10; rows >= minRows; rows--) {
  for(var spaces = 1; spaces <= rows; spaces++) {
  string2 += " "
  }
  for(var stars = 10; stars >= rows; stars--) {
  string2 += "*"
  }
  string2 += "\n"
}
 console.log(string2)

 //C.

var minRows = 0
 var string3 = ""
 for(var rows = 10; rows >= minRows; rows--) {
  for(var spaces = 10; spaces > rows; spaces--) {
  string3 += " "
  }
  for(var stars = 1; stars <= rows; stars++) {
  string3 += "*"
  }
  string3 += "\n"
}
 console.log(string3)