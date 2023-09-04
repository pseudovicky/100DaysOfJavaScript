// Syncronous Programming 

// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your fevorite color?")
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");



// Asyncronous Programming

// console.log("Start")
// setTimeout(function() {
//     console.log("Hey I am Good !");
// }, 3000 
// )
// console.log("End")


// Callbacks
function loadScript(src){
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js");
