let first = document.getElementById("first")

let a = first.getAttribute("class")
console.log(a)

// hasAttribute(name)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

// getAttribute(name)
console.log(first.getAttribute("class"))
console.log(first.getAttribute("style"))

// first.setAttribute("hidded","true")
first.setAttribute("class","true sachin")

// remove 
first.removeAttribute("class","true sachin")

console.log(first.attributes)



console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)

