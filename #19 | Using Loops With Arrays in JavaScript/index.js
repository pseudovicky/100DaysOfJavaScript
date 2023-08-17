let num = [3, 54,3, 4, 2]

for(let i=0;i<num.length;i++){
  console.log(num[i])
}

// forEach Loop
num.forEach((element)=>{
  console.log(element*element)
})

// Array.from

// select a html class 
// a = document.getElementById("class name")
// at this time - a is a html HTMLCollection
// Array.from(a)
// now this is a an Array

let name = "vicky"
let arr = Array.from(name)
console.log(arr)

//  for...of

for(let i of num){
  console.log(i)
}

// for...in

for(let item in num){
  console.log(item, num[item])
}
