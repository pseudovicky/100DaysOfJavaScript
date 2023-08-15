# Function in JavaScript

A javascript function is a block of clode designed to program a particular task.

syntax of a function look like this:

function myFunc(){
  //code
}

### Function Defination :-

function vinod(parameter1, parameter2){
  // dekh rha hai na vinod yahi function ka syntax hai
}

### function calling
vinod(2,6)


### Function invocation is a way to use the code inside the function.

A function can also return a value the value is returned back to the caller.

function AverageCalculator(num1,num2){
  return "Average = ", (num1 + num2)/2
}

let num1 = parseInt(prompt("Enter first number : "))
let num2 = parseInt(prompt("Enter second Number: "))

// calling function
result = AverageCalculator(num1,num2)
console.log(result)