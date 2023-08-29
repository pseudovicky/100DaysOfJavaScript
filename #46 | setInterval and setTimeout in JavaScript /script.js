document.write("Hello")

let a = setTimeout(function(){
    alert("I am inside of setTimeout")
}, 5000)

let b = prompt("Do you want to run the settimeout?")
if("no" == b){

}else{
clearTimeout(a)
}
console.log(a) // Timer id
