// Functions in JavaScript 

// Use of Function

// why
// let a = 1;
// let b = 2;
// let c = 3;

// console.log("Average of a and b is ", (a + b)/2)
// console.log("Average of b and c is ", (b + c)/2)
// console.log("Average of a and c is ", (a + c)/2)


// define function
function AverageCalculator(num1,num2){
    return "Average = ", (num1 + num2)/2
  }
  
  let num1 = parseInt(prompt("Enter first number : "))
  let num2 = parseInt(prompt("Enter second Number: "))
  
  // calling function
  result = AverageCalculator(num1,num2)
  console.log(result)