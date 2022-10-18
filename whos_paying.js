const names = ["Angela","Ben","Jenny","Michael","Chloe"]
console.log(whosPaying())
console.log(whosPaying())
console.log(whosPaying())
console.log(whosPaying())
console.log(whosPaying())

function whosPaying(){
    return names [Math.floor(Math.random()*names.length)] + " is going to buy lunch now!"
}