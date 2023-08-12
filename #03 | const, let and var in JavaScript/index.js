console.log("JavaScript Day03: var, let and const")

// variable decleration using var
var a = 45;
var b = "vicky"
var c = null
var d = undefined
{
  var b = "this"
  console.log(b)
}
console.log(b)
var b = "Vicky Kumar"
console.log(b)
b = "JavaScript Developer"
console.log(b)


// using let 

let h = "Main block ke bahar hu"
{
  let h = "main block ke under hoon"
  console.log(h)
}
console.log(h)
h = "new value"
console.log(h)

// let h = "new" # throw an error

// Using Const 

const name = "vicky Kumar"
const age = 23
console.log(name,age)
//  Errors ! - Throws an errors coz constant cannot be changed.
// age = 24   
// name = "maow"
// console.log(name,age)
