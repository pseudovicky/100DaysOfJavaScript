document.write("Hello")

let a = setTimeout(function(){
    alert("I am inside of setTimeout")
}, 2000)

let b = prompt("Do you want to run the settimeout?")
if("no" == b){

}else{
clearTimeout(a)
}
console.log(a) // Timer id


const sum = (a,b) => {
    console.log("Yes i an running?")
   add = a + b
   console.log(`sum = ${add}`)
}

setTimeout(sum, 5000, 6, 2)

// interval

setInterval(function(){
    alert("setinterval")
}, 3000)



// let num1 = parseInt(prompt("Input first number :"))
// let num2 = parseInt(prompt("Input second number : "))

// const multiply = (num1,num2) => {
//     console.log(num1 * num2)
// }

// setTimeInterval(function(){
//     console.log("settimeInterval is running, multiply function  is running !")
//     multiply(num1,num2)
// }, 10000 )
