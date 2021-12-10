const fruits = ["Apple", "Tamarind", "Banana"]
console.log(fruits)
//console.log(fruits.length)

//Index is the position of the number. It represents the position of the element that I'm looking for.

console.log(fruits[0])

//return the entire array in one string.

var frString = fruits.toString()
console.log(frString)

//create another array and combine them into one.

const moreFruits = ["Orange", "Mango", "Lemon"]
const allFruits = fruits.concat(moreFruits)
console.log(allFruits)

//remove the last element from the array.

console.log(allFruits.splice([5]))
console.log(allFruits)

//add a new element(value) to the area.

allFruits.push("Tomato")
console.log(allFruits)

//console log the length of the array.

console.log(allFruits.length)

//return an element at a specific index.


//remove an element from the array and put into a new array using slice.

//******everything i do should have a console.log*******