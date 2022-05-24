// Design and implement an application that prints the first few verses of the traveling song "One Hundred Bottles of Beer." Use a loop 
// such that each iteration prints one verse. Validate the input. The follow- ing 
// are the first two verses of the song:
// 100 bottles of beer on the wall
// 100 bottles of beer
// If one of those bottles should happen to fall 99 bottles of beer on the wall
// 99 bottles of beer on the wall
// 99 bottles of beer
// If one of those bottles should happen to fall 98 bottles of beer on the wall

//Step1: Make the function and the call
//Step2: Make the loop, that counts down from 100 to 0
//Step3: Console log it with the rest of the verse, The console log has to be outside of the loop.

function beerOnWall(){
    var maxBeers = 0
    for (var i = 100; i >= maxBeers; i--) {
        console.log(i+"th", "bottles of beer on the wall\n", i, "bottles of beer")
        console.log("If one of those bottles should happen to fall\n", i-1, "bottles of beer on the wall\n")
    }       
}
beerOnWall()