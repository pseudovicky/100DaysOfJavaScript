
let x = function(e){
    console.log(e.target) // console
    console.log(e) // console output
    alert("Hello World1!")
}

let y = function(e){
    alert("Hello World2!")
}

btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a = prompt("What is your favorite number? ")

if(a == "2"){
    btn.removeEventListener('click', x)    
}