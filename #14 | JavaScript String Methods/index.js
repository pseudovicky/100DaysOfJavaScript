// String properties & methods

// length
let name = "viCky\"VICKY\tViCkY"
console.log(name.length)

// toUpperCase()
console.log(name.toUpperCase())

// toLowerCase()
console.log(name.toLowerCase())

// slice
console.log(name.slice(2,8))
console.log(name.slice(2))
console.log(name.slice(0,10))

// replace
let data = "This is a string"
console.log(data)
console.log(data.replace("string","replaced"))

// concat
let fname = "vicky"
let lname = "Kumar"
console.log(fname.concat(" ", lname))

// trim
let line = "   this have some white spaces.  "
console.log(line)
console.log(line.trim())

/*
Strings are immutable . In order to access the character at an index we use the fllowing syntax.
  let name = "vicky"
      name[0] -> print v
      name[1] -> print i

*/

// Use a for loop to print each character of a string.

let str1 = "Print this string using for loop."
for(let i=0; i< str1.length;i++){
    console.log(str1[i])
}