let promise = new Promise(function(resolve, reject){
    // alert("I am an alert in primise")
    alert("Hello")
    resolve(56)

})

console.log('Hello one')
setTimeout(function(){
    console.log('Hello two in 2 seconds.')
}, 2000)

console.log('My name is ' + 'Hello Three')
console.log(promise)

/*
Promise {<fulfilled>: 56}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled" 
[[PromiseResult]]: 56
*/

// Fetch google.com homepage ==> console.log("google.com homepage done")
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// reset of the script


