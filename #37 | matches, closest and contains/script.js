// document.log(id1) // not good practice

let id1 = document.getElementById("id1")
console.log(id1)

// matches 
console.log(id1.matches(".class")) //false
console.log(id1.matches(".box"))   //true

// closest
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
// console.log(sp1.contains(id1)) 
