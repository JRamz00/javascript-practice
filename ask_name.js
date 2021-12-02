var name = prompt("Hello, what's your name?")      
console.log(name)                                                         

name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase()

alert("Hello " + name)
