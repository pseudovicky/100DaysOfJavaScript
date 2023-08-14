let age = prompt("Hey what's your age? ")

console.log(age, typeof age)

alert("This is a alert!")

// prompt takes input alert show output

// Typecasting
age = Number.parseInt(age)
console.log(age, typeof age)

if(age>18){
    alert("You can drive !")
}