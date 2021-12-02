//write a function that takes 3 numbers and returns the minumum (smallest number).

function minOfThree(x,y,z){

    if ((x <= y) && (x <= z)){
        return x
    }
    else if((y <= x) && (y <=z)){
        return y
    }
    else {
        return z
    }
}
console.log(minOfThree(3,4,5))
console.log(minOfThree(5,3,4))
console.log(minOfThree(4,5,3))