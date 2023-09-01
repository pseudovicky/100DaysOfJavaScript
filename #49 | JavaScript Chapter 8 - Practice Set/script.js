// using event listener

document.getElementById("google").addEventListener("click", function(){
    window.location = "https://www.google.com";
})

document.getElementById("fb").addEventListener("click", function(){
    window.location = "https://www.facebook.com";
})

document.getElementById("twitter").addEventListener("click", function(){
    window.location = "https://www.twitter.com";
})

setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
}, 1000)